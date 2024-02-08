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
  isEnd?: boolean
  renderContent: (item: T, width: number, height: number) => JSX.Element
  ySpacer: number
  xSpacer: number
}

function MasonryComponent<T>({
  items = [],
  columnCount,
  defaultWidth,
  defaultHeight,
  total = 10,
  handleNextPage,
  isLoading,
  isEnd,
  renderContent,
  ySpacer,
  xSpacer,
}: Props<T>) {
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

  const columnCountFor = (availableWidth: number) =>
    Math.round(availableWidth / (customWidth + spacer))

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
    if (isLoading || isEnd || !handleNextPage) return
    handleNextPage()
  }

  return (
    <AutoSizer onResize={onResize}>
      {({ width, height }: { width: number; height: number }) => (
        <InfiniteLoader
          isRowLoaded={isRowLoaded}
          loadMoreRows={loadMoreRows}
          rowCount={total}
        >
          {() => {
            if (!cacheRef.current || !cellPositionerRef.current) {
              return null
            }
            return (
              <Masonry
                style={{ height: `${height}px` }}
                autoHeight={true}
                ref={masonryRef}
                cellCount={total || 5}
                cellMeasurerCache={cacheRef.current}
                cellPositioner={cellPositionerRef.current}
                cellRenderer={cellRenderer}
                height={height}
                width={width}
                keyMapper={keyMapper}
              />
            )
          }}
        </InfiniteLoader>
      )}
    </AutoSizer>
  )
}

export default MasonryComponent
