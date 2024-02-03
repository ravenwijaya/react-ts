import 'styled-components'
import { Theme } from '@mui/material/styles'
import { CustomTheme } from './theme/theme'

declare module '@mui/material/styles' {
  // eslint-disable-next-line no-shadow
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
