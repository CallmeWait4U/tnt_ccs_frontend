import Main from '../components/layout/Main'
import ComplaintManagement from '../features/complaintManagement'

const ComplaintPage = () => {
  return (
    <Main
      pageProps={{
        keySideNav: 'complaint',
        namePage: 'Quản lý khiếu nại',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Danh sách khiếu nại' }
        ]
      }}
    >
      <ComplaintManagement />
    </Main>
  )
}
export default ComplaintPage
