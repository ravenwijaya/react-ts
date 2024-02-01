// import Layout from './Layout'
import { ComponentType, ReactElement } from 'react'

const withLayout =
  <P extends object>(WrappedComponent: ComponentType<P>) =>
  (props: P): ReactElement => (
    <>
      {/* <Layout> */}
      <h1>asdsa</h1>
      <WrappedComponent {...props} />
      {/* </Layout> */}
    </>
  )

export default withLayout
