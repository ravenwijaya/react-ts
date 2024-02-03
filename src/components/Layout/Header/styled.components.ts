import styled from 'styled-components'
import { ReactComponent as Logo } from '../../../assets/svgs/logo.svg'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 99;
  background-color: ${(props) => props.theme.customColors.grey1};
  height: 70px;
  padding-left: 21px;
`

export const StyledLogo = styled(Logo)`
  width: 35px;
  height: 15px;
`
