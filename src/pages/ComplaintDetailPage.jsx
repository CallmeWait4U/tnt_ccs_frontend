import Main from '../components/layout/Main'
import ComplaintDetail from '../features/complaintManagement/detail'

const ComplaintDetailPage = () => {
  return (
    <Main
      pageProps={{
        keySideNav: 'complaint',
        namePage: 'Quản lý khiếu nại',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Quản lý khiếu nại', path: '/customer' }
        ]
      }}
    >
      <ComplaintDetail />
    </Main>
  )
}
export default ComplaintDetailPage
