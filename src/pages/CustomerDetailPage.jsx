import Main from '../components/layout/Main'
import CustomerDetail from '../features/customerManagement/detail'

const CustomerDetailPage = () => {
  return (
    <Main
      pageProps={{
        keySideNav: 'customer',
        namePage: 'Quản lý khách hàng',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Quản lý khách hàng', path: '/customer' }
        ]
      }}
    >
      <CustomerDetail />
    </Main>
  )
}
export default CustomerDetailPage
