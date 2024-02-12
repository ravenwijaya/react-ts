import { TabsList as BaseTabsList } from '@mui/base/TabsList'
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel'
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab'
import { Tabs } from '@mui/base/Tabs'
import styled from 'styled-components'

export const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Tab = styled(BaseTab)(
  ({ theme }) => `
  font-family: Ubuntu;
  font-size: 16px;
  font-weight: ${theme.fontWeight.regular};
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
    font-weight: ${theme.fontWeight.bold};
    border-bottom: 2px solid ${theme.customColors.white1}!important;
  }
  background-color:${theme.customColors.grey1};
  padding-top:26px;
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