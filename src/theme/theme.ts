import { createTheme } from '@mui/material/styles'

interface NumberValueMap {
  [key: string]: number
}

interface StringValueMap {
  [key: string]: string
}

export interface CustomTheme {
  customColors: StringValueMap
  fontWeight: NumberValueMap
  customFonts: StringValueMap
}
const customColors = {
  black1: '#121212',
  white1: '#FFFFFF',
  white2: '#FFFFFF80',
  white3: '#FFFFFF0F',
  red1: '#B02121',
  grey1: '#1B1B1B',
  grey2: '#6A6A6A',
  grey3: '#929292',
  grey4: '#1F1F1F',
  grey5: '#F8F8F8',
  grey6: '#B2B2B2',
  blue1: '#00D1FF',
  orange1: '#FF9B33',
}
const fontWeight = {
  regular: 400,
  semiBold: 600,
  bold: 700,
}
const customFonts = {
  openSans: 'Open Sans',
  ubuntu: 'Ubuntu',
}

export const theme = {
  customColors,
  customFonts,
  fontWeight,
}

export const customTheme = createTheme(theme)
