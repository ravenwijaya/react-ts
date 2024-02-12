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

export const Title = styled(Typography)`
  font-family: Ubuntu;
  font-size: 30px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.customColors.white1};
  line-height: 45px;
  letter-spacing: 0.25px;
  text-align: left;
`

export const ListContainer = styled(Box)`
  display: flex;
  width: 375px;
  height: 100%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.customColors.grey1};
`

export const ResultContainer = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const HeaderContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 25px;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 24px;
  ${media.xlarge`
    height:161px;
    gap:31.75px;
    padding-top: 92px;
    padding-left:92.5px;
  `}
`
export const ListResultContainer = styled(Box)`
  width: 335px;
  ${media.mobile`
    width:700px;
  `}
  ${media.xlarge`
    width:725px;
  `}
`

export const ContentContainer = styled(Box)`
  display: flex;
  flex: 1;
  justify-content: center;
  ${media.xlarge`
    padding-bottom:12px;
  `}
`
