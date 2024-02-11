import { useLocation, useNavigate } from 'react-router-dom'
import { theme } from '../../../theme/theme'
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
    <StyledBadge badgeContent={isActive ? null : ''}>
      <Icon
        name={icon}
        width={24}
        height={24}
        color={isActive ? theme.customColors.white1 : theme.customColors.grey2}
      />
    </StyledBadge>
    {isActive && (
      <Hidden only={['xsmall', 'small', 'medium', 'large']}>
        <ButtonText variant="caption">{text}</ButtonText>
      </Hidden>
    )}
  </MenuButtonContainer>
)

const Menu = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const items = [
    { text: 'Home', route: ROUTES.HOME },
    { text: 'Tags', route: ROUTES.TAGS },
  ]

  return (
    <MenuContainer>
      <Hidden only={['xsmall', 'small', 'medium', 'large']}>
        <HeaderContainer>
          <Icon name={ICON_NAMES.LOGO} />
        </HeaderContainer>
      </Hidden>

      <ItemContainer>
        {items.map(({ text, route }) => (
          <MenuItem
            key={route}
            text={text}
            onClick={() => navigate(route)}
            isActive={
              pathname === route ||
              (route === ROUTES.HOME && pathname === ROUTES.RESULTS)
            }
            icon={ICON_NAMES.UNION}
          />
        ))}
      </ItemContainer>
    </MenuContainer>
  )
}

export default Menu
