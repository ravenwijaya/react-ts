import { useLocation, useNavigate } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery'
import Icon from '../../UI/Icon'
import { ICON_NAMES, ROUTES } from '../../../constants/core'
import { HeaderContainer, NavContainer, Title } from './styled.components'
import { deviceType } from '../../../utils/media'

const Header = () => {
  const { pathname, state } = useLocation()
  const navigate = useNavigate()
  const isDesktop = useMediaQuery(deviceType.desktop)

  const showNavigation = !isDesktop && pathname !== ROUTES.HOME

  const handleNavClick = () => {
    if (showNavigation) {
      navigate(ROUTES.HOME, { state, replace: true })
    }
  }

  return (
    <HeaderContainer showNav={showNavigation} onClick={handleNavClick}>
      {showNavigation ? (
        <NavContainer>
          <Icon name={ICON_NAMES.CHEVRON_LEFT} width={12.77} height={21.67} />
          <Title variant="h5">Home Page</Title>
        </NavContainer>
      ) : (
        <Icon name={ICON_NAMES.LOGO} />
      )}
    </HeaderContainer>
  )
}

export default Header
