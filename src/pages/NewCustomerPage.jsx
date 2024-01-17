import Main from '../components/layout/Main'
import { PATH } from '../contants/common'
import CustomerForm from '../features/customerManagement/form/CustomerForm'

const NewCustomerPage = () => {
  return (
    <Main
      pageProps={{
        namePage: 'Quản lý khách hàng',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          {
            title: (
              <a href={`${PATH.CUSTOMER}`} style={{ color: 'black' }}>
                Quản lý khách hàng
              </a>
            )
          },
          { title: 'Tạo mới khách hàng' }
        ]
      }}
    >
      <CustomerForm />
    </Main>
  )
}
export default NewCustomerPage
