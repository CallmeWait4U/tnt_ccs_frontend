import Main from '../components/layout/Main'
import { ROLE } from '../contants/common'
import EmployeeDetail from '../features/employeeManagement/detail/EmployeeDetail'

const EmployeeDetailPage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keySideNav: 'employee',
        namePage: 'Quản lý tổ chức',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Danh sách khách hàng' }
        ]
      }}
    >
      <EmployeeDetail />
    </Main>
  )
}
export default EmployeeDetailPage
