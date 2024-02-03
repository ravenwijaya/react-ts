import styled from 'styled-components'
import media from '../../../utils/media'

interface MenuButtonContainerProps {
  isActive: boolean
  onClick: () => void
}

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  ${media.small`
    background-color:blue;
  `}
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuButtonContainer = styled.div<MenuButtonContainerProps>`
  display: flex;
  flex-direction: column;
`
