import Main from '../components/layout/Main'
import { ROLE } from '../contants/common'
import EmployeeManagement from '../features/employeeManagement'

const EmpployeesPage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keySideNav: 'employee',
        namePage: 'Quản lý nhân viên',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Quản lý nhân viên' }
        ]
      }}
    >
      <EmployeeManagement />
    </Main>
  )
}
export default EmpployeesPage
