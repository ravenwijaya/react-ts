import { Interpolation, css } from 'styled-components'

interface MediaQueries {
  [key: string]: (
    strings: TemplateStringsArray,
    ...interpolations: Interpolation<object>[]
  ) => ReturnType<typeof css>
}

export const DEVICE_SIZES = {
  xsmall: 0,
  mobileLandscape: 500,
  small: 720,
  tablet: 768,
  desktop: 992,
  medium: 1024,
  giant: 1200,
  large: 1280,
  xlarge: 1440,
  mobile: 767,
  mobileSmall: 360,
}

const media: MediaQueries = {}

Object.keys(DEVICE_SIZES).forEach((size) => {
  const key = size as keyof typeof DEVICE_SIZES
  if (Object.prototype.hasOwnProperty.call(DEVICE_SIZES, key)) {
    media[key] = (strings, ...interpolations) => {
      if (!DEVICE_SIZES[key]) return css(strings, ...interpolations)
      return css`
        @media (min-width: ${DEVICE_SIZES[key]}px) {
          ${css(strings, ...interpolations)}
        }
      `
    }
  }
})

export default media
