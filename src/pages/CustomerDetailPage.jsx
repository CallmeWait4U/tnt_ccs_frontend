import { useLocation } from 'react-router-dom'
import Main from '../components/layout/Main'
import { PATH } from '../contants/common'
import CustomerDetail from '../features/customerManagement/detail'

const CustomerDetailPage = () => {
  const location = useLocation()
  let isBusiness
  const getCode = () => {
    const info = location.pathname.split('/')[2].split('&')
    isBusiness = info[1] === 'true' ? true : false
    return info[0]
  }

  return (
    <Main
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
          { title: getCode() }
        ]
      }}
    >
      <CustomerDetail isBusiness={isBusiness} />
    </Main>
  )
}
export default CustomerDetailPage
