import styled from 'styled-components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import media from '../../utils/media'

export const BaseContainer = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: ${({ theme }) => theme.customColors.black1};
`
export const SettingContainer = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0px 20px;
  ${media.xlarge`
    padding:54px 130px;
  `}
`
export const SearchContainer = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 28px;
  ${media.xlarge`
    padding-bottom:30px;
    gap:20px;
    border-bottom:1px solid ${({ theme }) => theme.customColors.white1};
  `}
`
export const LimitContainer = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 28px;
  background-color: red;
  ${media.xlarge`
    padding-top:30px;
    padding-bottom:30px;
    gap:20px;
    border-bottom:1px solid ${({ theme }) => theme.customColors.white1};
  `}
`
export const Title = styled(Typography)`
  font-family: Ubuntu;
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.customColors.white1};
  line-height: 36px;
  letter-spacing: 0px;
`

export const ListContainer = styled(Box)`
  display: flex;
  width: 375px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.customColors.white1};
`
