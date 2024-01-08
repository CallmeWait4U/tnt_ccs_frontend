import Main from '../components/layout/Main'
import EmployeeDetail from '../features/employeeManagement/detail/EmployeeDetail'

const EmployeeDetailPage = () => {
  return (
    <Main
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
