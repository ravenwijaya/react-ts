import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from './store'
import { customTheme } from './theme/theme'
import AppRouter from './router'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  )
}

export default App
