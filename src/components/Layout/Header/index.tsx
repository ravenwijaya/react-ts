import Icon from '../../UI/Icon'
import { ICON_NAMES } from '../../../constants/core'
import { HeaderContainer } from './styled.components'

const Header = () => (
  <HeaderContainer>
    <Icon name={ICON_NAMES.LOGO} />
  </HeaderContainer>
)
export default Header
