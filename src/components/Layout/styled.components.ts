import styled from 'styled-components'
import Box from '@mui/material/Box'
import media from '../../utils/media'

export const MainContainer = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: ${(props) => props.theme.customColors.black1};
`

export const FlexContainer = styled(Box)`
  display: flex;
  flex: 1;
  max-width: 100%;
  height: 100vh;
  flex-direction: column;
  overflow-y: auto;
  padding-top: 70px;
  padding-bottom: 66px;
  ${media.xlarge`
    padding-top:0px;
    padding-bottom:0px;
    padding-left:80px;
  `}
`
