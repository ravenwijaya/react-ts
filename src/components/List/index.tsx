import {
  AutoSizer,
  InfiniteLoader,
  List,
  ListRowRenderer,
} from 'react-virtualized'
import { CSSProperties } from 'react'
import { Box } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import { theme } from '../../theme/theme'
import Button from '../UI/Button'
import { BUTTON_VARIANTS } from '../../constants/core'
import {
  LeftContent,
  ListContainer,
  MiddleContent,
  Name,
  RightContent,
  StyledAvatar,
  UserContainer,
  Username,
} from './styled.components'

interface ItemListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[]
  total: number
  handleNextPage: () => void
  isLoading: boolean
  isEnd: boolean
}

interface MyObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}
const SkeletonRow = ({ style }: { style: CSSProperties }) => (
  <Box style={style}>
    <UserContainer>
      <LeftContent>
        <Skeleton
          variant="circular"
          width={40}
          height={40}
          sx={{ bgcolor: theme.customColors.white3 }}
        />
      </LeftContent>
      <MiddleContent>
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
      </MiddleContent>
      <RightContent>
        <Skeleton
          variant="rectangular"
          width={60}
          height={29}
          sx={{ bgcolor: theme.customColors.white3 }}
        />
      </RightContent>
    </UserContainer>
  </Box>
)

const Row = ({ style, item }: { style: CSSProperties; item: MyObject }) => {
  const btnText = item.isFollowing ? 'Following' : 'Follow'
  const btnVariant = item.isFollowing
    ? BUTTON_VARIANTS.CONTAINED
    : BUTTON_VARIANTS.OUTLINED
  return (
    <Box style={style}>
      <UserContainer>
        <LeftContent>
          <StyledAvatar alt={item.name} src={item.avater} />
        </LeftContent>
        <MiddleContent>
          <Name variant="body1">{item.name}</Name>
          <Username variant="body2">{item.username}</Username>
        </MiddleContent>
        <RightContent>
          <Button onClick={() => {}} variant={btnVariant}>
            {btnText}
          </Button>
        </RightContent>
      </UserContainer>
    </Box>
  )
}

const ItemList = ({
  data,
  total = 20,
  handleNextPage,
  isLoading,
  isEnd,
}: ItemListProps) => {
  const rowRenderer: ListRowRenderer = ({ key, index, style }) => {
    if (data[index]) {
      return <Row key={key} style={style} item={data[index]} />
    }
    return <SkeletonRow key={key} style={style} />
  }

  function isRowLoaded({ index }: { index: number }) {
    return !!data[index]
  }

  const handleNewPageLoad = async () => {
    if (isLoading || isEnd) return
    handleNextPage()
  }

  const loadMoreRows = handleNewPageLoad
  return (
    <ListContainer>
      <AutoSizer>
        {({ width, height }: { width: number; height: number }) => (
          <InfiniteLoader
            isRowLoaded={isRowLoaded}
            loadMoreRows={loadMoreRows}
            rowCount={total}
            threshold={1}
          >
            {({ onRowsRendered, registerChild }) => (
              <List
                ref={registerChild}
                height={height}
                onRowsRendered={onRowsRendered}
                rowCount={total}
                rowHeight={61}
                rowRenderer={rowRenderer}
                width={width}
              />
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </ListContainer>
  )
}

export default ItemList
