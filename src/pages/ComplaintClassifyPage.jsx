import Main from '../components/layout/Main'
import { ROLE } from '../contants/common'
import ComplaintClassifyManagement from '../features/complaintClassify/index'

const ComplaintClassifyPage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keySideNav: 'complain-classify',
        namePage: 'Quản lý khiếu nại',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Quản lý khiếu nại' }
        ]
      }}
    >
      <ComplaintClassifyManagement />
    </Main>
  )
}
export default ComplaintClassifyPage
