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
  const isDesktop = useMediaQuery(deviceType.desktop)
  const navigate = useNavigate()
  if (!isDesktop && pathname !== ROUTES.HOME) return <></>
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
          onClick={() => navigate(ROUTES.TAGS)}
          isActive={ROUTES.TAGS === pathname}
          icon={ICON_NAMES.UNION}
        />
      </ItemContainer>
    </MenuContainer>
  )
}
export default Menu
