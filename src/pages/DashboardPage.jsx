import Main from '../components/layout/Main'
import Dashboard from '../features/dashboard/Dashboard'

const DashboardPage = () => {
  return (
    <Main
      pageProps={{
        keySideNav: 'dashboard',
        namePage: 'Báo cáo - thống kê',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Báo cáo - thống kê' }
        ]
      }}
    >
      <Dashboard />
    </Main>
  )
}
export default DashboardPage
