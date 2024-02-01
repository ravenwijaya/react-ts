import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Tags from '../pages/Tags'
import Home from '../pages/Home'
import { ROUTES } from '../constants/core'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.TAGS} element={<Tags />} />
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter
