import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import styled from 'styled-components'

export const HeaderContainer = styled(Box)<{ showNav: boolean }>`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  background-color: ${({ theme }) => theme.customColors.black1};
  height: 70px;
  padding-left: ${({ showNav }) => (showNav ? '25.5px' : '21px')};
`

export const NavContainer = styled(Box)`
  display: flex;
  gap: 19.88px;
  align-items: center;
`

export const Title = styled(Typography)`
  font-family: Ubuntu;
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 36px;
  letter-spacing: 0;
  text-align: left;
  color: ${({ theme }) => theme.customColors.white1};
`
