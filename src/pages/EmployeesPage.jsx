import Main from '../components/layout/Main'
import EmployeeManagement from '../features/employeeManagement'

const EmpployeesPage = () => {
  return (
    <Main
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
