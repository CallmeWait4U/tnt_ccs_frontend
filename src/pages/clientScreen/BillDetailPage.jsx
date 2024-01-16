import { useLocation } from 'react-router-dom'
import { PATH, ROLE } from '../../contants/common'

import Main from '../../components/layout/Main'
import ClientBillDetail from '../../features/clientScreen/billManagement/detail'

const ClientBillDetailPage = () => {
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
          { title: `Chi tiết hóa đơn ${getCode()}` }
        ]
      }}
    >
      <ClientBillDetail />
    </Main>
  )
}
export default ClientBillDetailPage
