import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { useState, ReactNode, CSSProperties } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import Icon from '../../components/UI/Icon'
import { deviceType } from '../../utils/media'
import { BUTTON_VARIANTS, ICON_NAMES } from '../../constants/core'
import {
  User,
  useFetchFollowersQuery,
  useFetchFollowingQuery,
  // useFetchUsersQuery,
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
  ResultContainer,
  HeaderContainer,
  LeftContent,
  MiddleContent,
  Name,
  RightContent,
  StyledAvatar,
  UserContainer,
  Username,
} from './styled.components'
import { Hidden } from '../../components/UI/Hidden'
import ItemList from '../../components/List'
import Button from '../../components/UI/Button'

interface FormInput {
  search: string
}
type RenderUserFunction = (
  item: User,
  style: CSSProperties,
  key: string,
) => ReactNode

const renderUser: RenderUserFunction = (item, style, key) => (
  <Box key={key} style={style}>
    <UserContainer>
      <LeftContent>
        {item ? (
          <StyledAvatar alt={item.name} src={item.avater} />
        ) : (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{ bgcolor: theme.customColors.white3 }}
          />
        )}
      </LeftContent>
      <MiddleContent>
        {item ? (
          <>
            <Name noWrap variant="body1">
              {item.name}
            </Name>
            <Username noWrap variant="body2">
              @{item.username}
            </Username>
          </>
        ) : (
          <>
            <Skeleton
              variant="rectangular"
              width={79}
              sx={{ bgcolor: theme.customColors.white3 }}
            />
            <Skeleton
              variant="rectangular"
              width={70}
              sx={{ bgcolor: theme.customColors.white3 }}
            />
          </>
        )}
      </MiddleContent>
      <RightContent>
        {item ? (
          <Button
            onClick={() => {}}
            variant={
              item.isFollowing
                ? BUTTON_VARIANTS.CONTAINED
                : BUTTON_VARIANTS.OUTLINED
            }
          >
            {item.isFollowing ? 'Following' : 'Follow'}
          </Button>
        ) : (
          <Skeleton
            variant="rectangular"
            width={60}
            height={29}
            sx={{ bgcolor: theme.customColors.white3 }}
          />
        )}
      </RightContent>
    </UserContainer>
  </Box>
)

const Home = () => {
  const isDesktop = useMediaQuery(deviceType.desktop)
  const [value, setValue] = useState(1)
  const { handleSubmit, control } = useForm()
  const [showResult, setShowResult] = useState(false)
  const [fetchFollowersArgs, setFetchFollowersArgs] = useState({
    page: 1,
    pageSize: 15,
  })
  const [fetchFollowingArgs, setFetchFollowingArgs] = useState({
    page: 1,
    pageSize: 15,
  })
  // const [fetchUsersArgs, setFetchUsersArgs] = useState({
  //   page: 1,
  //   pageSize: 15,
  //   keyword: '',
  // })

  const { data: responseFollowers, isFetching: isFetchingFollowers } =
    useFetchFollowersQuery(fetchFollowersArgs)
  const { data: responseFollowing, isFetching: isFetchingFollowing } =
    useFetchFollowingQuery(fetchFollowingArgs)
  // const { data: responseUsers, isFetching: isFetchingUsers } =
  //   useFetchUsersQuery(fetchUsersArgs)

  const handleFetchFollowers = () => {
    setFetchFollowersArgs((prev) => ({ ...prev, page: prev.page + 1 }))
  }
  const handleFetchFollowing = () => {
    setFetchFollowingArgs((prev) => ({ ...prev, page: prev.page + 1 }))
  }
  // const handleFetchUsers = () => {
  //   setFetchUsersArgs((prev) => ({ ...prev, page: prev.page + 1 }))
  // }

  const onSubmit: SubmitHandler<FieldValues> = (inputData) => {
    setShowResult(true)
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
      {showResult ? (
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
      ) : (
        <ResultContainer>
          <HeaderContainer>
            <Icon name={ICON_NAMES.CHEVRON_LEFT} width={12.77} height={21.67} />
            <Title variant={isDesktop ? 'h4' : 'h5'}>Results</Title>
          </HeaderContainer>
        </ResultContainer>
      )}
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
                isEnd={
                  fetchFollowersArgs.page === responseFollowers?.totalPages
                }
                handleNextPage={handleFetchFollowers}
                renderContent={renderUser}
              ></ItemList>
            </TabPanel>
            <TabPanel value={2} isActive={value === 2}>
              <ItemList<User>
                data={responseFollowing?.data}
                total={responseFollowing?.total}
                isLoading={isFetchingFollowing}
                isEnd={
                  fetchFollowingArgs.page === responseFollowing?.totalPages
                }
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
