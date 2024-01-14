import Main from '../components/layout/Main'
import { ROLE } from '../contants/common'
import CustomerForm from '../features/customerManagement/form/CustomerForm'

const NewCustomerPage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keyNavbar: 'customer',
        namePage: 'Quản lý khách hàng',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Khách hàng mới' }
        ]
      }}
    >
      <CustomerForm />
    </Main>
  )
}
export default NewCustomerPage
