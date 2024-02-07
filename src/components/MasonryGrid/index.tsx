import { CSSProperties, useRef } from 'react'
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  CellRenderer,
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
  spacer: number
  renderContent: (item: T, style: CSSProperties) => JSX.Element
  wrapperStyle?: CSSProperties
}

function MasonryComponent<T>({
  items,
  columnCount,
  defaultWidth,
  defaultHeight,
  spacer,
  renderContent,
  wrapperStyle,
}: Props<T>) {
  const cacheRef = useRef<CellMeasurerCache | null>(null)
  const cellPositionerRef = useRef<Positioner | null>(null)
  const masonryRef = useRef<Masonry>(null)

  const columnCountFor = (availableWidth: number) =>
    Math.floor(availableWidth / (defaultWidth + spacer))

  if (!cacheRef.current) {
    cacheRef.current = new CellMeasurerCache({
      defaultHeight,
      defaultWidth,
      fixedWidth: true,
    })

    cellPositionerRef.current = createMasonryCellPositioner({
      cellMeasurerCache: cacheRef.current,
      columnCount,
      columnWidth: defaultWidth,
      spacer,
    })
  }

  const onResize = ({ width }: { width: number }) => {
    if (!cellPositionerRef.current) return
    cellPositionerRef.current.reset({
      columnCount: columnCountFor(width),
      columnWidth: defaultWidth,
      spacer,
    })
    if (!masonryRef.current) return
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
        {renderContent(item, style as CSSProperties)}
        {/* <div style={{ ...style }}>
        <img
          src={
            'https://venturebeat.com/wp-content/uploads/2017/03/ShopChat-e1506572472915.jpg'
          }
          style={{
            height: defaultHeight,
            width: defaultWidth,
            display: 'block',
            objectFit: 'cover',
          }}
        />
      </div> */}
      </CellMeasurer>
    )
  }

  return (
    <AutoSizer onResize={onResize}>
      {({ width, height }: { width: number; height: number }) => {
        if (!cacheRef.current || !cellPositionerRef.current) {
          return null
        }
        return (
          <Masonry
            style={wrapperStyle}
            autoHeight={false}
            ref={masonryRef}
            cellCount={items.length || 5}
            cellMeasurerCache={cacheRef.current}
            cellPositioner={cellPositionerRef.current}
            cellRenderer={cellRenderer}
            height={height}
            width={width}
            keyMapper={keyMapper}
          />
        )
      }}
    </AutoSizer>
  )
}

export default MasonryComponent
