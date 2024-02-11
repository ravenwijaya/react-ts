import { ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery'
import { deviceType } from '../../utils/media'
import Hidden from '../UI/Hidden'
import Menu from './Menu'
import Header from './Header'
import { MainContainer, FlexContainer } from './styled.components'
import { ROUTES } from '../../constants/core'

const Layout = ({ children }: { children: ReactElement }) => {
  const { pathname } = useLocation()
  const isDesktop = useMediaQuery(deviceType.desktop)
  const showMenu = isDesktop || pathname === ROUTES.HOME
  return (
    <MainContainer>
      <Hidden only={['xlarge']}>
        <Header />
      </Hidden>
      {showMenu && <Menu />}
      <FlexContainer showMenu={showMenu}>{children}</FlexContainer>
    </MainContainer>
  )
}

export default Layout
