import Box from '@mui/material/Box'
import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import media from '../../../utils/media'

export const ItemContainer = styled(Box)<{ width: number; height: number }>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`

export const ContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 335px;
  height: 282px;
  ${media.xlarge`
    width: 219px;
    height: 197px;
  `}
`

export const ImageContainer = styled(Box)`
  width: 335px;
  height: 222.67px;
  ${media.xlarge`
    width: 219px;
    height: 146px;
  `}
`

export const FooterContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 20.33px;
`

export const Name = styled(Typography)`
  font-family: Ubuntu;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 22px;
  letter-spacing: 0.13968750834465027px;
  text-align: left;
  color: ${({ theme }) => theme.customColors.white1};
`

export const Username = styled(Typography)`
  font-family: Ubuntu;
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 17px;
  letter-spacing: 0.3725000023841858px;
  text-align: left;
  color: ${({ theme }) => theme.customColors.grey6};
`
