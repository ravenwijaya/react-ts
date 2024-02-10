import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { CSSProperties, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserItem from '../../components/Home/UserItem'
import { BUTTON_VARIANTS, ROUTES } from '../../constants/core'
import {
  User,
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

const renderUser = (item: User, style: CSSProperties, key: string) => (
  <UserItem item={item} style={style} key={key} />
)

const Home = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState(1)
  const { handleSubmit, control } = useForm()

  const [fetchFollowersArgs, setFetchFollowersArgs] = useState({
    page: 1,
    pageSize: 15,
  })
  const [fetchFollowingArgs, setFetchFollowingArgs] = useState({
    page: 1,
    pageSize: 15,
  })

  const { data: responseFollowers, isFetching: isFetchingFollowers } =
    useFetchFollowersQuery(fetchFollowersArgs)
  const { data: responseFollowing, isFetching: isFetchingFollowing } =
    useFetchFollowingQuery(fetchFollowingArgs)

  const handleFetchFollowers = () => {
    setFetchFollowersArgs((prev) => ({ ...prev, page: prev.page + 1 }))
  }
  const handleFetchFollowing = () => {
    setFetchFollowingArgs((prev) => ({ ...prev, page: prev.page + 1 }))
  }

  const onSubmit: SubmitHandler<FieldValues> = (inputData) => {
    const inputValues = inputData as FormInput
    const queryParams = []
    if (true) queryParams.push(`size=20`)
    if (false) queryParams.push(`keyword=''`)
    console.log(inputValues)
    navigate({ pathname: ROUTES.RESULTS, search: queryParams.join('&') })
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
              <ItemList<User>
                data={responseFollowers?.data}
                total={responseFollowers?.total}
                isLoading={isFetchingFollowers}
                handleNextPage={handleFetchFollowers}
                renderContent={renderUser}
              ></ItemList>
            </TabPanel>
            <TabPanel value={2} isActive={value === 2}>
              <ItemList<User>
                data={responseFollowing?.data}
                total={responseFollowing?.total}
                isLoading={isFetchingFollowing}
                handleNextPage={handleFetchFollowing}
                renderContent={renderUser}
              ></ItemList>
            </TabPanel>
          </StyledTabs>
        </ListContainer>
      </Hidden>
    </BaseContainer>
  )
}

export default Home
