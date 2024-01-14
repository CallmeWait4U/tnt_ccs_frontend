import Main from '../components/layout/Main'
import { ROLE } from '../contants/common'
import NewEmployee from '../features/employeeManagement/form/NewEmployee'

const NewEmployeePage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keySideNav: 'employee',
        namePage: 'Quản lý nhân viên',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Danh sách khách hàng' }
        ]
      }}
    >
      <NewEmployee />
    </Main>
  )
}
export default NewEmployeePage
