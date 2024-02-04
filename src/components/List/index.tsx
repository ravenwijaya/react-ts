import {
  AutoSizer,
  InfiniteLoader,
  List,
  ListRowRenderer,
  WindowScroller,
} from 'react-virtualized'
import { CSSProperties } from 'react'
import { ListContainer } from './styled.components'

interface ItemListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[]
  total: number
  handleNextPage: () => void
  isLoading: boolean
}

interface MyObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}
const Row = ({ style, item }: { style: CSSProperties; item: MyObject }) => (
  <div style={style}>
    <h1>{item?.name}</h1>
  </div>
)

const ItemList = ({
  data,
  total,
  handleNextPage,
  isLoading,
}: ItemListProps) => {
  console.log({ isLoading })
  const rowRenderer: ListRowRenderer = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    style, // Style object to be applied to row (to position it)
  }) => <Row key={key} style={style} item={data[index]} />

  function isRowLoaded({ index }: { index: number }) {
    return !!data[index]
  }

  const handleNewPageLoad = async () => {
    handleNextPage()
  }

  const loadMoreRows = isLoading ? async () => {} : handleNewPageLoad

  if (!data.length) return <span>Loading initial repositories</span>

  return (
    <ListContainer>
      {/* <div style={{ width: '80%', overflow: 'auto' }}> */}
      <AutoSizer disableHeight={true}>
        {({ width }: { width: number }) => (
          <WindowScroller>
            {({ height, isScrolling, onChildScroll, scrollTop }) => (
              <InfiniteLoader
                isRowLoaded={isRowLoaded}
                loadMoreRows={loadMoreRows}
                rowCount={total}
              >
                {({ onRowsRendered, registerChild }) => (
                  <List
                    autoHeight
                    onRowsRendered={onRowsRendered}
                    ref={registerChild}
                    height={height}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    rowCount={data.length}
                    rowHeight={42}
                    rowRenderer={rowRenderer}
                    scrollTop={scrollTop}
                    width={width}
                  />
                )}
              </InfiniteLoader>
            )}
          </WindowScroller>
        )}
      </AutoSizer>
      {isLoading && <span>loading more ...</span>}
      {/* </div> */}
    </ListContainer>
  )
}

export default ItemList
