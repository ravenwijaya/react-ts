import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { memo, useRef } from 'react'
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  CellRenderer,
  InfiniteLoader,
  Masonry,
  Positioner,
  createMasonryCellPositioner,
} from 'react-virtualized'
import { theme } from '../../theme/theme'

interface Props<T> {
  items: T[]
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
  defaultWidth,
  defaultHeight,
  total = 1,
  handleNextPage,
  isLoading,
  renderContent,
  ySpacer,
  xSpacer,
}: Props<T>) {
  const hasMore = items.length < total
  const cacheRef = useRef<CellMeasurerCache | null>(null)
  const cellPositionerRef = useRef<Positioner | null>(null)
  const masonryRef = useRef<Masonry>(null)
  const spacer = ySpacer < xSpacer ? ySpacer : xSpacer
  const customHeight =
    ySpacer < xSpacer ? defaultHeight + xSpacer - ySpacer : defaultHeight
  const customWidth =
    ySpacer >= xSpacer ? defaultWidth + ySpacer - xSpacer : defaultWidth

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
      columnCount: 5,
      columnWidth: customWidth,
      spacer,
    })
  }

  const onResize = ({ width }: { width: number }) => {
    if (!cellPositionerRef.current || !masonryRef.current) return
    const maxItems = columnCountFor(width)
    cellPositionerRef.current.reset({
      columnCount: maxItems,
      columnWidth: customWidth,
      spacer,
    })
    masonryRef.current.recomputeCellPositions()
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
  if (isLoading === false && items.length === 0)
    return (
      <Typography sx={{ color: theme.customColors.white1 }}>
        No result
      </Typography>
    )
  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreRows}
      rowCount={hasMore ? items.length + 1 : items.length}
    >
      {({ onRowsRendered }) => (
        <AutoSizer onResize={onResize}>
          {({ width, height }: { width: number; height: number }) => {
            if (!cacheRef.current || !cellPositionerRef.current) return null
            return (
              <Masonry
                style={{ height: `${height}px` }}
                autoHeight={true}
                ref={masonryRef}
                cellCount={items.length || total}
                cellMeasurerCache={cacheRef.current}
                cellPositioner={cellPositionerRef.current}
                cellRenderer={cellRenderer}
                onCellsRendered={onRowsRendered}
                height={height}
                width={width}
                keyMapper={(index) => index}
              />
            )
          }}
        </AutoSizer>
      )}
    </InfiniteLoader>
  )
}
export default memo(MasonryComponent) as <T>(props: Props<T>) => JSX.Element
