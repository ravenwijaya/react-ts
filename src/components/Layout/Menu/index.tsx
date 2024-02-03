import { useLocation, useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { ROUTES } from '../../../constants/core'
import {
  ItemContainer,
  MenuButtonContainer,
  MenuContainer,
} from './styled.components'

interface MenuItemProps {
  text: string
  isActive: boolean
  onClick: () => void
}

const MenuItem = ({ text, isActive, onClick }: MenuItemProps) => (
  <MenuButtonContainer
    onClick={!isActive ? onClick : () => {}}
    isActive={isActive}
  >
    <Typography variant="h1" component="h2">
      {text}
    </Typography>
  </MenuButtonContainer>
)

const Menu = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  return (
    <MenuContainer>
      <ItemContainer>
        <MenuItem
          text="Home"
          onClick={() => navigate(ROUTES.HOME)}
          isActive={ROUTES.HOME === pathname}
        />
      </ItemContainer>
    </MenuContainer>
  )
}
export default Menu
