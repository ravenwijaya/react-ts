import styled from 'styled-components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import media from '../../utils/media'

export const BaseContainer = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
`
export const HeaderContainer = styled(Box)`
  padding-top: 20px;
  padding-left: 20px;
  ${media.xlarge`
    padding-top:80px;
    padding-left:257px;
`}
`
export const Title = styled(Typography)`
  font-family: Ubuntu;
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.customColors.white1};
  line-height: 36px;
  letter-spacing: 0px;
  margin-left: -5px;
  ${media.xlarge`
    margin-left:0px;
    font-family: Ubuntu;
    font-size: 30px;
    line-height: 45px;
    letter-spacing: 0.25px;
  `}
`
export const Wrapper = styled(Box)`
  margin-top: 24px;
  display: flex;
  flex: 1;
  justify-content: center;
`
export const ListContainer = styled(Box)`
  width: 324px;
  ${media.mobile`
    width:700px;
  `}
  ${media.xlarge`
    width:846px;
  `}
`
