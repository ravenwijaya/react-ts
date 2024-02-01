import React from 'react'
import Button from '@mui/material/Button'
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme/theme'

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.customColors.black1};
  color: ${(props) => props.theme.customColors.white1};
  font-family: ${(props) => props.theme.customFonts.ubuntu};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: 12px;
`
function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton>Following</StyledButton>
    </ThemeProvider>
  )
}

export default App
