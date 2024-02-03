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

const theme = createTheme({
  customColors: {
    black1: '#121212',
    white1: '#FFFFFF',
    red1: '#B02121',
    grey1: '#1B1B1B',
    blue1: '#00D1FF',
  },
  fontWeight: {
    regular: 400,
    semiBold: 600,
    bold: 700,
  },
  customFonts: {
    openSans: 'Open Sans',
    ubuntu: 'Ubuntu',
  },
})

export default theme
