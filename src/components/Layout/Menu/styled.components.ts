import styled from 'styled-components'
import media from '../../../utils/media'

interface MenuButtonContainerProps {
  isActive: boolean
  onClick: () => void
}

export const MenuContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0px;
  width: 100%;
  z-index: 99;
  background-color: ${(props) => props.theme.customColors.grey1};
  height: 66px;
  ${media.xlarge`
  flex-direction:column;
  width:80px;
  height:100%;
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
