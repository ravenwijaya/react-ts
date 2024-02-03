import { ReactElement } from 'react'
import { Hidden } from '../UI/Hidden'
import Menu from './Menu'
import { FlexContainer, MainContainer } from './styled.components'
import Header from './Header'

const Layout = ({ children }: { children: ReactElement }) => (
  <MainContainer>
    <Hidden only={['xlarge']}>
      <Header />
    </Hidden>
    <Menu />
    <FlexContainer>{children}</FlexContainer>
  </MainContainer>
)
export default Layout
