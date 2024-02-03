import { useLocation, useNavigate } from 'react-router-dom'
import Icon from '../../UI/Icon'
import Hidden from '../../UI/Hidden'
import { ICON_NAMES, ROUTES } from '../../../constants/core'
import {
  ButtonText,
  HeaderContainer,
  ItemContainer,
  MenuButtonContainer,
  MenuContainer,
  StyledBadge,
} from './styled.components'

export interface MenuItemProps {
  text: string
  icon: string
  isActive: boolean
  onClick: () => void
}

const MenuItem = ({ text, icon, isActive, onClick }: MenuItemProps) => (
  <MenuButtonContainer
    onClick={!isActive ? onClick : () => {}}
    isActive={isActive}
  >
    <StyledBadge badgeContent={''}>
      <Icon name={icon} width={24} height={24} />
    </StyledBadge>
    <ButtonText variant="caption">{text}</ButtonText>
  </MenuButtonContainer>
)

const Menu = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  return (
    <MenuContainer>
      <Hidden only={['xsmall', 'small', 'medium', 'large']}>
        <HeaderContainer>
          <Icon name={ICON_NAMES.LOGO} />
        </HeaderContainer>
      </Hidden>

      <ItemContainer>
        <MenuItem
          text="Home"
          onClick={() => navigate(ROUTES.HOME)}
          isActive={ROUTES.HOME === pathname}
          icon={ICON_NAMES.UNION}
        />
        <MenuItem
          text="Tags"
          onClick={() => navigate(ROUTES.HOME)}
          isActive={ROUTES.HOME === pathname}
          icon={ICON_NAMES.UNION}
        />
      </ItemContainer>
    </MenuContainer>
  )
}
export default Menu
