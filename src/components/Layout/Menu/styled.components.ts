import styled from 'styled-components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import media from '../../../utils/media'

interface MenuButtonContainerProps {
  isActive: boolean
  onClick: () => void
}

export const MenuContainer = styled(Box)`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 99;
  background-color: ${({ theme }) => theme.customColors.grey1};
  height: 66px;

  ${media.xlarge`
    flex-direction: column;
    width: 80px;
    height: 100%;
  `}
`

export const HeaderContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 88px;
`

export const ItemContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 52.24px;

  ${media.xlarge`
    flex-direction: column;
    gap: 24px;
    margin-top:9px;
  `}
`

export const MenuButtonContainer = styled(Box)<MenuButtonContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.96px;
`

export const ButtonText = styled(Typography)<{ isActive: boolean }>`
  font-family: Ubuntu;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.customColors.white1};
  line-height: 18px;
  letter-spacing: 0.4px;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
`

export const StyledBadge = styled(Badge)`
  .MuiBadge-badge {
    min-width: 5px;
    height: 5px;
    padding: 0;
    background-color: ${({ theme }) => theme.customColors.blue1};
    top: -3px;
    right: -3px;
  }
`
