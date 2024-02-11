import {
  AutoSizer,
  InfiniteLoader,
  List,
  ListRowRenderer,
} from 'react-virtualized'
import { CSSProperties, ReactNode, memo } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { ListContainer, LoaderContainer } from './styled.components'

interface Props<T> {
  data: T[]
  total: number
  handleNextPage: () => void
  isLoading: boolean
  renderContent: (item: T, style: CSSProperties, key: string) => ReactNode
}

const ItemList = <T,>({
  data = [],
  total = 20,
  handleNextPage,
  isLoading,
  renderContent,
}: Props<T>) => {
  const hasMore = data.length < total

  const rowRenderer: ListRowRenderer = ({ key, index, style }) => {
    const item = data[index]
    return renderContent(item, style, key)
  }

  const isRowLoaded = ({ index }: { index: number }) => !!data[index]

  const loadMoreRows = async () => {
    if (isLoading || !hasMore) return
    handleNextPage()
  }
  return (
    <>
      <ListContainer>
        <AutoSizer>
          {({ width, height }: { width: number; height: number }) => (
            <InfiniteLoader
              isRowLoaded={isRowLoaded}
              loadMoreRows={loadMoreRows}
              threshold={1}
              rowCount={hasMore ? data.length + 1 : data.length}
            >
              {({ onRowsRendered, registerChild }) => (
                <List
                  ref={registerChild}
                  height={height}
                  onRowsRendered={onRowsRendered}
                  rowCount={data.length || total}
                  rowHeight={61}
                  rowRenderer={rowRenderer}
                  width={width}
                />
              )}
            </InfiniteLoader>
          )}
        </AutoSizer>
      </ListContainer>

      {isLoading && data.length > 0 && (
        <LoaderContainer>
          <CircularProgress />
        </LoaderContainer>
      )}
    </>
  )
}

export default memo(ItemList) as <T>(props: Props<T>) => JSX.Element
