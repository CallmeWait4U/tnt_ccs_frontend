import { useLocation } from 'react-router-dom'
import Main from '../components/layout/Main'
import { PATH, ROLE } from '../contants/common'
import CustomerDetail from '../features/customerManagement/detail'

const CustomerDetailPage = () => {
  const location = useLocation()
  const info = location.pathname.split('/')[3].split('&')
  const isBusiness = info[0] === 'true' ? true : false
  console.log(location)

  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keySideNav: 'customer',
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
          { title: 'Chi tiết khách hàng' }
        ]
      }}
    >
      <CustomerDetail isBusiness={isBusiness} />
    </Main>
  )
}
export default CustomerDetailPage
