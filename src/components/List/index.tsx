import {
  AutoSizer,
  InfiniteLoader,
  List,
  ListRowRenderer,
} from 'react-virtualized'
import { CSSProperties, ReactNode } from 'react'
import { ListContainer } from './styled.components'

interface Props<T> {
  data: T[]
  total: number
  handleNextPage: () => void
  isLoading: boolean
  isEnd: boolean
  renderContent: (item: T, style: CSSProperties, key: string) => ReactNode
}

function ItemList<T>({
  data = [],
  total = 20,
  handleNextPage,
  isLoading,
  isEnd,
  renderContent,
}: Props<T>) {
  const rowRenderer: ListRowRenderer = ({ key, index, style }) => {
    const item = data[index]
    return renderContent(item, style, key)
  }

  function isRowLoaded({ index }: { index: number }) {
    return !!data[index]
  }

  const loadMoreRows = async () => {
    if (isLoading || isEnd) return
    handleNextPage()
  }

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
