import { Outlet } from 'react-router-dom'
import Layout from '../components/Layout'

const SecureRoute = () => (
  <Layout>
    <Outlet />
  </Layout>
)
export default SecureRoute
