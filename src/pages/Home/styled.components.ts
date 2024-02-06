import styled from 'styled-components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { TabsList as BaseTabsList } from '@mui/base/TabsList'
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel'
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab'
import { Tabs } from '@mui/base/Tabs'
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
    padding:54px 130px 87px 130px;
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

export const Title = styled(Typography)`
  font-family: Ubuntu;
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.customColors.white1};
  line-height: 36px;
  letter-spacing: 0px;
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
export const ListContainer = styled(Box)`
  display: flex;
  width: 375px;
  height: 100%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.customColors.grey1};
`
export const ContentContainer = styled(Box)``

export const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Tab = styled(BaseTab)(
  ({ theme }) => `
  font-family: Ubuntu;
  font-size: 16px;
  font-weight: ${theme.fontWeight.bold};
  line-height: 24px;
  letter-spacing: 0.15000000596046448px;
  text-align: center;
  color:${theme.customColors.grey3};
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color:${theme.customColors.grey1};
    color:${theme.customColors.white1};
  }
  border: none;
  border-bottom: 2px solid ${theme.customColors.grey4}!important;
  &.${tabClasses.selected} {
    color:${theme.customColors.white1};
    border-bottom: 2px solid ${theme.customColors.white1}!important;
  }
  background-color:${theme.customColors.grey1};
  padding-top:34px;
  `,
)
export const TabPanel = styled(BaseTabPanel)<{ isActive: boolean }>`
  flex: 1;
  font-size: 0.875rem;
  ${({ isActive }) =>
    isActive &&
    `
    display:flex;
    flex-direction:column;
  `}
`
export const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  width:100%;
  height:65px;
  display: flex;
  background-color:${theme.customColors.black1};
  `,
)

export const ResultContainer = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`
export const HeaderContainer = styled(Box)`
  display: flex;
  background-color: red;
  align-items: center;
  gap: 25px;
  ${media.xlarge`
    padding-top: 92px;
    padding-left:92.5px;
  `}
`
