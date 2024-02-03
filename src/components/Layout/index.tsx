import { ReactElement } from 'react'
import Menu from './Menu'
import { MainContainer } from './styled.components'

const Layout = ({ children }: { children: ReactElement }) => (
  <MainContainer>
    <Menu />
    {children}
  </MainContainer>
)
export default Layout
