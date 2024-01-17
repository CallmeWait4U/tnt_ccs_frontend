import { useLocation } from 'react-router-dom'
import { PATH, ROLE } from '../../contants/common'

import Main from '../../components/layout/Main'
import ClientBillManagement from '../../features/clientScreen/billManagement'

const ClientBillPage = () => {
  const location = useLocation()
  const getCode = () => {
    return location.pathname.split('/')[2]
  }

  return (
    <Main
      role={ROLE.CUSTOMER}
      pageProps={{
        namePage: 'Quản lý hóa đơn',
        keySideNav: 'bill',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          {
            title: (
              <a href={PATH.ACTIVITY} style={{ color: 'black' }}>
                Quản lý hóa đơn
              </a>
            )
          },
          { title: `Danh sách hóa đơn ${getCode()}` }
        ]
      }}
    >
      <ClientBillManagement />
    </Main>
  )
}
export default ClientBillPage
