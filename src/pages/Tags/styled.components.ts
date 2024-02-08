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
  padding: 0px 26px 0px 25px;
  ${media.xlarge`
  padding:0px 257px;
`}
`
export const ListContainer = styled(Box)`
  display: flex;
  flex: 1;
`

export const ContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 199px;
`
export const ItemContainer = styled(Box)`
  flex-direction: column;
  display: flex;
  width: ${({ width }) => `${width}`}px;
  height: ${({ height }) => `${height}`}px;
`
export const ItemLogoContainer = styled(Box)`
  display: flex;
  align-items: end;
  width: 150px;
  height: 150px;
  max-height: 150px;
  padding-bottom: 14px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.customColors.white3};
`

export const ItemLogo = styled(Box)`
  padding: 7px 14px 7px 14px;
  margin-left: 10px;
  border-radius: 8px;
  border: 4px solid ${({ theme }) => theme.customColors.white1};
  gap: 10px;
  width: fit-content;
  height: fit-content;
`
export const ItemText = styled(Typography)`
  font-family: Ubuntu;
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  max-width: 90px;
  color: ${({ theme }) => theme.customColors.white1};
`

export const TextContainer = styled(Box)`
  flex-direction: column;
  display: flex;
`

export const TagText = styled(Typography)`
  font-family: Ubuntu;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 22px;
  letter-spacing: 0.13968750834465027px;
  text-align: left;
  width: 100%;
  color: ${({ theme }) => theme.customColors.white1};
`
export const CountText = styled(Typography)`
  font-family: Ubuntu;
  font-size: 11px;
  line-height: 17px;
  letter-spacing: 0.3725000023841858px;
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.customColors.grey6};
`
