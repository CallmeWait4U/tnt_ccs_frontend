import Main from '../components/layout/Main'
import { ROLE } from '../contants/common'
import ComplaintManagement from '../features/complaintManagement'

const ComplaintPage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keySideNav: 'complain-list',
        namePage: 'Quản lý khiếu nại',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Quản lý khiếu nại' }
        ]
      }}
    >
      <ComplaintManagement />
    </Main>
  )
}
export default ComplaintPage
