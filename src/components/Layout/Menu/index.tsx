import { useLocation, useNavigate } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'
import { deviceType } from '../../../utils/media'
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
  showBadge: boolean
  onClick: () => void
}

const MenuItem = ({
  text,
  icon,
  isActive,
  onClick,
  showBadge,
}: MenuItemProps) => (
  <MenuButtonContainer
    onClick={!isActive ? onClick : () => {}}
    isActive={isActive}
  >
    <StyledBadge badgeContent={showBadge ? '' : null}>
      <Icon
        name={icon}
        width={19.76}
        height={20.04}
        color={isActive ? theme.customColors.white1 : theme.customColors.grey2}
      />
    </StyledBadge>
    <Hidden only={['xsmall', 'small', 'medium', 'large']}>
      <ButtonText variant="caption" isActive={isActive}>
        {text}
      </ButtonText>
    </Hidden>
  </MenuButtonContainer>
)

const Menu = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isDesktop = useMediaQuery(deviceType.desktop)

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
            showBadge={
              route === ROUTES.TAGS && pathname !== ROUTES.TAGS && isDesktop
            }
            icon={ICON_NAMES.UNION}
          />
        ))}
      </ItemContainer>
    </MenuContainer>
  )
}

export default Menu
