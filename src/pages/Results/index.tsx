import { CSSProperties, useCallback, useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useLocation, useNavigate } from 'react-router-dom'
import UserItem from '../../components/Home/UserItem'
import Icon from '../../components/UI/Icon'
import { deviceType } from '../../utils/media'
import { ICON_NAMES, ROUTES } from '../../constants/core'
import {
  User,
  useFetchFollowersQuery,
  useFetchFollowingQuery,
  useFetchUsersQuery,
} from '../../store/apis/userApi'
import {
  BaseContainer,
  ListContainer,
  Tab,
  TabPanel,
  StyledTabs,
  TabsList,
  Title,
  ResultContainer,
  HeaderContainer,
  ListResultContainer,
  ContentContainer,
} from './styled.components'
import { Hidden } from '../../components/UI/Hidden'
import ItemList from '../../components/List'
import MasonryComponent from '../../components/MasonryGrid'
import SearchUserItem from '../../components/Home/SearchUserItem'

const renderUser = (item: User, style: CSSProperties, key: string) => (
  <UserItem item={item} style={style} key={key} />
)

const renderSearchUser = (item: User, width: number, height: number) => (
  <SearchUserItem item={item} width={width} height={height} />
)

const Results = () => {
  const { state } = useLocation()

  const isDesktop = useMediaQuery(deviceType.desktop)
  const navigate = useNavigate()
  const [value, setValue] = useState(1)

  const [fetchFollowersArgs, setFetchFollowersArgs] = useState({
    page: 1,
    pageSize: 15,
  })
  const [fetchFollowingArgs, setFetchFollowingArgs] = useState({
    page: 1,
    pageSize: 15,
  })
  const [fetchUsersArgs, setFetchUsersArgs] = useState({
    page: 1,
    pageSize: state?.pageSize,
    keyword: state?.keyword,
  })

  const { data: responseFollowers, isFetching: isFetchingFollowers } =
    useFetchFollowersQuery(fetchFollowersArgs)
  const { data: responseFollowing, isFetching: isFetchingFollowing } =
    useFetchFollowingQuery(fetchFollowingArgs)
  const { data: responseUsers, isFetching: isFetchingUsers } =
    useFetchUsersQuery(fetchUsersArgs)

  const handleFetchFollowers = useCallback(() => {
    setFetchFollowersArgs((prev) => ({ ...prev, page: prev.page + 1 }))
  }, [])
  const handleFetchFollowing = useCallback(() => {
    setFetchFollowingArgs((prev) => ({ ...prev, page: prev.page + 1 }))
  }, [])
  const handleFetchUsers = useCallback(() => {
    setFetchUsersArgs((prev) => ({ ...prev, page: prev.page + 1 }))
  }, [])

  const handleTabChange = (
    event: React.SyntheticEvent<Element, Event> | null,
    newValue: string | number | null,
  ) => {
    setValue(newValue as number)
  }

  return (
    <BaseContainer>
      <ResultContainer>
        <HeaderContainer
          onClick={() => navigate(ROUTES.HOME, { state, replace: true })}
        >
          <Hidden only={['xsmall', 'small', 'medium', 'large']}>
            <Icon name={ICON_NAMES.CHEVRON_LEFT} width={12.77} height={21.67} />
          </Hidden>
          <Title variant={isDesktop ? 'h4' : 'h5'}>Results</Title>
        </HeaderContainer>
        <ContentContainer>
          <ListResultContainer>
            <MasonryComponent<User>
              defaultHeight={isDesktop ? 197 : 282}
              defaultWidth={isDesktop ? 219 : 335}
              ySpacer={34}
              xSpacer={31}
              items={responseUsers?.data}
              renderContent={renderSearchUser}
              total={responseUsers?.total}
              isLoading={isFetchingUsers}
              handleNextPage={handleFetchUsers}
            />
          </ListResultContainer>
        </ContentContainer>
      </ResultContainer>
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

export default Results
