import Box from '@mui/material/Box'
import { useRef } from 'react'
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  CellRenderer,
  InfiniteLoader,
  KeyMapper,
  Masonry,
  Positioner,
  createMasonryCellPositioner,
} from 'react-virtualized'

const keyMapper: KeyMapper = (index) => index

interface Props<T> {
  items: T[]
  columnCount: number
  defaultWidth: number
  defaultHeight: number
  total: number
  handleNextPage?: () => void
  isLoading?: boolean
  renderContent: (item: T, width: number, height: number) => JSX.Element
  ySpacer: number
  xSpacer: number
}

function MasonryComponent<T>({
  items = [],
  columnCount,
  defaultWidth,
  defaultHeight,
  total = 5,
  handleNextPage,
  isLoading,
  renderContent,
  ySpacer,
  xSpacer,
}: Props<T>) {
  const hasMore = items.length < total
  const cacheRef = useRef<CellMeasurerCache | null>(null)
  const cellPositionerRef = useRef<Positioner | null>(null)
  const maxColumn = useRef<number>(columnCount)
  const masonryRef = useRef<Masonry>(null)
  const spacer = ySpacer < xSpacer ? ySpacer : xSpacer
  let customHeight = defaultHeight
  let customWidth = defaultWidth
  if (spacer === ySpacer) {
    // ySpacer lesser need to add more height
    customHeight = defaultHeight + xSpacer - ySpacer
  } else {
    // xSpacer lesser need to add more width
    customWidth = defaultWidth + ySpacer - xSpacer
  }

  const columnCountFor = (availableWidth: number) => {
    const res = availableWidth / (customWidth + spacer)
    const decimal = res - Math.floor(res)
    const rounded = decimal > 0.8 ? Math.round(res) : Math.floor(res)
    return rounded
  }

  if (!cacheRef.current) {
    cacheRef.current = new CellMeasurerCache({
      defaultHeight: customHeight,
      defaultWidth: customWidth,
      fixedWidth: true,
    })

    cellPositionerRef.current = createMasonryCellPositioner({
      cellMeasurerCache: cacheRef.current,
      columnCount,
      columnWidth: customWidth,
      spacer,
    })
  }

  const onResize = ({ width }: { width: number }) => {
    if (!cellPositionerRef.current) return
    const maxItems = columnCountFor(width)
    cellPositionerRef.current.reset({
      columnCount: columnCountFor(width),
      columnWidth: customWidth,
      spacer,
    })
    if (!masonryRef.current) return
    masonryRef.current.recomputeCellPositions()
    maxColumn.current = maxItems
  }

  const cellRenderer: CellRenderer = ({ index, key, parent, style }) => {
    const item = items[index]
    return (
      <CellMeasurer
        cache={cacheRef.current as CellMeasurerCache}
        index={index}
        key={key}
        parent={parent}
      >
        <Box style={style}>
          {renderContent(item, customWidth, customHeight)}
        </Box>
      </CellMeasurer>
    )
  }
  const isRowLoaded = ({ index }: { index: number }) => !!items[index]
  const loadMoreRows = async () => {
    if (isLoading || !hasMore || !handleNextPage) return
    handleNextPage()
  }
  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreRows}
      rowCount={hasMore ? items.length + 1 : items.length}
    >
      {({ onRowsRendered }) => (
        <AutoSizer onResize={onResize}>
          {({ width, height }: { width: number; height: number }) => {
            if (!cacheRef.current || !cellPositionerRef.current) {
              return null
            }
            return (
              <Masonry
                style={{ height: `${height}px` }}
                autoHeight={true}
                ref={masonryRef}
                cellCount={items.length}
                cellMeasurerCache={cacheRef.current}
                cellPositioner={cellPositionerRef.current}
                cellRenderer={cellRenderer}
                onCellsRendered={onRowsRendered}
                height={height}
                width={width}
                keyMapper={keyMapper}
              />
            )
          }}
        </AutoSizer>
      )}
    </InfiniteLoader>
  )
}

export default MasonryComponent
