import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { useState } from 'react'
import { BUTTON_VARIANTS } from '../../constants/core'
import {
  useFetchFollowersQuery,
  useFetchFollowingQuery,
} from '../../store/apis/userApi'
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
  StyledTabs,
  TabsList,
  Title,
} from './styled.components'
import { Hidden } from '../../components/UI/Hidden'
import ItemList from '../../components/List'
import Button from '../../components/UI/Button'

interface FormInput {
  search: string
}

const Home = () => {
  const [value, setValue] = useState(1)
  const { handleSubmit, control } = useForm()
  const [followersFetchArgs, setFollowerFetchArgs] = useState({
    page: 1,
    pageSize: 15,
  })
  const [followingFetchArgs, setFollowingFetchArgs] = useState({
    page: 1,
    pageSize: 15,
  })

  const { data: followersResponse, isFetching: followersIsFetching } =
    useFetchFollowersQuery(followersFetchArgs)
  const { data: followingResponse, isFetching: followingIsFetching } =
    useFetchFollowingQuery(followingFetchArgs)

  const handleFetchFollowers = () => {
    setFollowerFetchArgs((prev) => ({ ...prev, page: prev.page + 1 }))
  }
  const handleFetchFollowing = () => {
    setFollowingFetchArgs((prev) => ({ ...prev, page: prev.page + 1 }))
  }

  const onSubmit: SubmitHandler<FieldValues> = (inputData) => {
    const inputValues = inputData as FormInput
    console.log(inputValues)
  }

  const handleTabChange = (
    event: React.SyntheticEvent<Element, Event> | null,
    newValue: string | number | null,
  ) => {
    setValue(newValue as number)
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
        <Button
          style={{ marginTop: 'auto' }}
          onClick={handleSubmit(onSubmit)}
          variant={BUTTON_VARIANTS.NORMAL}
        >
          Submit
        </Button>
      </SettingContainer>
      <Hidden only={['xsmall', 'small', 'medium', 'large']}>
        <ListContainer>
          <StyledTabs onChange={handleTabChange} value={value}>
            <TabsList>
              <Tab value={1}>Followers</Tab>
              <Tab value={2}>Following</Tab>
            </TabsList>
            <TabPanel value={1} isActive={value === 1}>
              <ItemList
                data={followersResponse?.data ?? []}
                total={followersResponse?.total}
                isLoading={followersIsFetching}
                isEnd={
                  followersFetchArgs.page === followersResponse?.totalPages
                }
                handleNextPage={handleFetchFollowers}
              ></ItemList>
            </TabPanel>
            <TabPanel value={2} isActive={value === 2}>
              <ItemList
                data={followingResponse?.data ?? []}
                total={followingResponse?.total}
                isLoading={followingIsFetching}
                isEnd={
                  followingFetchArgs.page === followingResponse?.totalPages
                }
                handleNextPage={handleFetchFollowing}
              ></ItemList>
            </TabPanel>
          </StyledTabs>
        </ListContainer>
      </Hidden>
    </BaseContainer>
  )
}

export default Home
