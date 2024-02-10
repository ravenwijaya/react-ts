import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Results from '../pages/Results'
import Tags from '../pages/Tags'
import Home from '../pages/Home'
import { ROUTES } from '../constants/core'
import SecureRoute from './SecureRoute'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SecureRoute />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.TAGS} element={<Tags />} />
          <Route path={ROUTES.RESULTS} element={<Results />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter
