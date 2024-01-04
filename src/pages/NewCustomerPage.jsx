import Main from '../components/layout/Main'
import CustomerForm from '../features/customerManagement/form/CustomerForm'

const NewCustomerPage = () => {
  return (
    <Main
      pageProps={{
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
