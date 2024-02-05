import styled from 'styled-components'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import { Typography } from '@mui/material'

export const ListContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 32px;
`

export const UserContainer = styled(Box)`
  display: flex;
  padding: 0 16px;
  padding-bottom: 16px;
`
export const LeftContent = styled(Box)`
  width: 40px;
`
export const MiddleContent = styled(Box)`
  flex: 1;
  margin-left: 15px;
`
export const RightContent = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: auto;
`
export const StyledAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.customColors.grey5};
`
export const Name = styled(Typography)`
  font-family: Ubuntu;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.customColors.white1};
  line-height: 24px;
  letter-spacing: 0.15000000596046448px;
  text-align: left;
`
export const Username = styled(Typography)`
  font-family: Ubuntu;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.customColors.white2};
  line-height: 21px;
  letter-spacing: 0.25px;
  text-align: left;
`
