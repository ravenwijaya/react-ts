import { ThemeProvider } from 'styled-components'
import { customTheme } from './theme/theme'
import AppRouter from './router'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
