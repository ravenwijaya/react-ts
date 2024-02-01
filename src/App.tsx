import { ThemeProvider } from 'styled-components'
import theme from './theme/theme'
import AppRouter from './router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
