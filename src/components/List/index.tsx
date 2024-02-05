import {
  AutoSizer,
  InfiniteLoader,
  List,
  ListRowRenderer,
  // WindowScroller,
} from 'react-virtualized'
import { CSSProperties } from 'react'
import { Box } from '@mui/material'
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
          <Button text={btnText} onClick={() => {}} variant={btnVariant} />
        </RightContent>
      </UserContainer>
    </Box>
  )
}

const ItemList = ({
  data,
  total,
  handleNextPage,
  isLoading,
  isEnd,
}: ItemListProps) => {
  const rowRenderer: ListRowRenderer = ({ key, index, style }) => (
    <Row key={key} style={style} item={data[index]} />
  )

  function isRowLoaded({ index }: { index: number }) {
    return !!data[index]
  }

  const handleNewPageLoad = async () => {
    if (isLoading || isEnd) return
    handleNextPage()
  }

  const loadMoreRows = handleNewPageLoad

  if (!data.length) return <span>Loading initial repositories</span>

  return (
    <ListContainer>
      <AutoSizer>
        {({ width, height }: { width: number; height: number }) => (
          // <WindowScroller>
          //   {({ isScrolling, onChildScroll, scrollTop }) => (
          <InfiniteLoader
            isRowLoaded={isRowLoaded}
            loadMoreRows={loadMoreRows}
            rowCount={total}
            threshold={1}
          >
            {({ onRowsRendered, registerChild }) => (
              <List
                // autoHeight
                onRowsRendered={onRowsRendered}
                ref={registerChild}
                height={height}
                // isScrolling={isScrolling}
                // onScroll={onChildScroll}
                rowCount={data.length}
                rowHeight={61}
                rowRenderer={rowRenderer}
                // scrollTop={scrollTop}
                width={width}
              />
            )}
          </InfiniteLoader>
        )}
        {/* </WindowScroller>
        )} */}
      </AutoSizer>
      {/* <span>loading more ...</span> */}
    </ListContainer>
  )
}

export default ItemList
