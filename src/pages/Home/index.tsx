import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { CSSProperties, useCallback, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  StyledTabs,
  Tab,
  TabPanel,
  TabsList,
} from '../../components/TabComponent/styled.components'
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
  Title,
  ResultContainer,
  SizeText,
  ResultText,
  FooterContainer,
} from './styled.components'
import { Hidden } from '../../components/UI/Hidden'
import ItemList from '../../components/List'
import Button from '../../components/UI/Button'

interface FormInput {
  search: string
  pageSize: number
}

const renderUser = (item: User, style: CSSProperties, key: string) => (
  <UserItem item={item} style={style} key={key} />
)

const Home = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [value, setValue] = useState(1)
  const { handleSubmit, control, watch } = useForm<FormInput>({
    defaultValues: {
      pageSize: state?.pageSize ? state.pageSize / 2 : 15,
      search: state?.keyword ?? '',
    },
  })
  const watchPageSize = watch('pageSize')
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

  const handleFetchFollowers = useCallback(() => {
    setFetchFollowersArgs((prev) => ({ ...prev, page: prev.page + 1 }))
  }, [])
  const handleFetchFollowing = useCallback(() => {
    setFetchFollowingArgs((prev) => ({ ...prev, page: prev.page + 1 }))
  }, [])

  const onSubmit: SubmitHandler<FieldValues> = (inputData) => {
    const { pageSize, search } = inputData as FormInput
    const newState = {
      ...(pageSize && { pageSize: pageSize * 2 }),
      ...(search && { keyword: search }),
    }
    navigate(ROUTES.RESULTS, { state: newState })
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
            placeholder="Keyword"
            control={control}
            borderColor={theme.customColors.white2}
            textColor={theme.customColors.white1}
          />
        </SearchContainer>
        <LimitContainer>
          <Title variant="h5"># Of Results Per Page</Title>
          <ResultContainer>
            <SizeText>{watchPageSize * 2}</SizeText>
            <ResultText>results</ResultText>
          </ResultContainer>
          <InputSlider name="pageSize" control={control} />
        </LimitContainer>
        <FooterContainer>
          <Button
            onClick={handleSubmit(onSubmit)}
            variant={BUTTON_VARIANTS.NORMAL}
          >
            SEARCH
          </Button>
        </FooterContainer>
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
