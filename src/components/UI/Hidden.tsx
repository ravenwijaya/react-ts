import { ReactNode, memo, useEffect, useState } from 'react'
import { DEVICE_SIZES } from '../../utils/media'

interface Sets {
  [key: string]: string
}

const sets: Sets = {
  xsmall: `(max-width:${DEVICE_SIZES.small - 1}px)`,
  small: `(min-width:${DEVICE_SIZES.small}px) and (max-width:${
    DEVICE_SIZES.medium - 1
  }px)`,
  medium: `(min-width:${DEVICE_SIZES.medium}px) and (max-width:${
    DEVICE_SIZES.large - 1
  }px)`,
  large: `(min-width:${DEVICE_SIZES.large}px) and (max-width:${
    DEVICE_SIZES.xlarge - 1
  }px)`,
  xlarge: `(min-width:${DEVICE_SIZES.xlarge}px)`,
}

interface HiddenProps {
  only: string[]
  children: ReactNode | (() => ReactNode)
}

export function Hidden({ only, children }: HiddenProps) {
  let matchers: MediaQueryList[]
  const [show, setShow] = useState(false)

  const checkMatches = () => {
    const match = matchers.some((m) => m.matches)
    setShow(!match)
  }

  useEffect(() => {
    matchers = only.map((set) => {
      const matcher = matchMedia(sets[set])
      matcher.addEventListener('change', checkMatches)
      return matcher
    })
    checkMatches()

    return () => matchers.forEach((m) => m.removeListener(checkMatches))
  }, [])

  if (!show) return null

  return typeof children === 'function' ? children() : children
}
export default memo(Hidden)
