import { useLocation, useNavigate } from 'react-router-dom'
import Icon from '../../UI/Icon'
import { ICON_NAMES, ROUTES } from '../../../constants/core'
import { HeaderContainer, NavContainer, Title } from './styled.components'
import { deviceType } from '../../../utils/media'

const Header = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isMobile = !deviceType.giant()
  const showNavigation = isMobile && pathname !== ROUTES.HOME
  return (
    <HeaderContainer showNav={showNavigation}>
      {showNavigation ? (
        <NavContainer onClick={() => navigate(ROUTES.HOME, { replace: true })}>
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
