import Main from '../components/layout/Main'
import { ROLE } from '../contants/common'
import Dashboard from '../features/dashboard/Dashboard'

const DashboardPage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keySideNav: 'dashboard',
        namePage: 'Thống kê',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Thống kê' }
        ]
      }}
    >
      <Dashboard />
    </Main>
  )
}
export default DashboardPage
