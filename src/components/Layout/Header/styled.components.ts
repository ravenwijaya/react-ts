import Box from '@mui/material/Box'
import styled from 'styled-components'

export const HeaderContainer = styled(Box)`
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
