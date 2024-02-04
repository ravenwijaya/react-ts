import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import Button from '@mui/material/Button'
// import { useState } from 'react'
import { Tabs } from '@mui/base/Tabs'
// import { useState } from 'react'
// import { useFetchFollowersQuery } from '../../store/apis/userApi'
import InputSlider from '../../components/UI/InputSlider'
import { theme } from '../../theme/theme'
import Input from '../../components/UI/Input'
import {
  BaseContainer,
  LimitContainer,
  ListContainer,
  SearchContainer,
  SettingContainer,
  Tab,
  TabPanel,
  TabsList,
  Title,
} from './styled.components'
import { Hidden } from '../../components/UI/Hidden'

interface FormInput {
  search: string
}

const Home = () => {
  // const [followersFetchArgs, setFollowerFetchArgs] = useState({
  //   page: 1,
  //   pageSize: 10,
  // })
  // const { data: FollowersResponse } = useFetchFollowersQuery({
  //   page: followersFetchArgs.page,
  //   pageSize: followersFetchArgs.pageSize,
  // })

  // const handleFetchFollowers = () => {
  //   setFollowerFetchArgs((prev) => ({ ...prev, page: 1 }))
  // }

  const { handleSubmit, control } = useForm()
  const onSubmit: SubmitHandler<FieldValues> = (inputData) => {
    const inputValues = inputData as FormInput
    // const x = inputData.search.split(',')
    // setPage(parseInt(x[0]))
    // const pageSizex = parseInt(x[1])
    // if (pageSize) setPageSize(pageSizex)
    console.log(inputValues)
  }

  return (
    <BaseContainer>
      <SettingContainer>
        <SearchContainer>
          <Title variant="h5">Search</Title>
          <Input
            name="search"
            placeholder="keyword"
            control={control}
            borderColor={theme.customColors.white2}
            textColor={theme.customColors.white1}
          />
        </SearchContainer>
        <LimitContainer>
          <Title variant="h5"># Of Results Per Page</Title>
          <InputSlider />
        </LimitContainer>
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Submit
        </Button>
      </SettingContainer>
      <Hidden only={['xsmall', 'small', 'medium', 'large']}>
        <ListContainer>
          <Tabs defaultValue={1}>
            <TabsList>
              <Tab value={1}>Followers</Tab>
              <Tab value={2}>Following</Tab>
            </TabsList>
            <TabPanel value={1}>First page</TabPanel>
            <TabPanel value={2}>Second page</TabPanel>
          </Tabs>
        </ListContainer>
      </Hidden>
    </BaseContainer>
  )
}

export default Home
