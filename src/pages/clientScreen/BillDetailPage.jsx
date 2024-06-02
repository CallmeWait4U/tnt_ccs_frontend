// import { useLocation } from 'react-router-dom'
import { PATH, ROLE } from '../../contants/common'

import Main from '../../components/layout/Main'
import ClientBillDetail from '../../features/clientScreen/billManagement/detail'

const ClientBillDetailPage = () => {
  return (
    <Main
      role={ROLE.CUSTOMER}
      pageProps={{
        namePage: 'Chi tiết hóa đơn',
        keySideNav: 'bill',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          {
            title: (
              <a href={PATH.CUSTOME_URL.BILL} style={{ color: 'black' }}>
                Danh sách hóa đơn
              </a>
            )
          },
          { title: `Chi tiết hóa đơn` }
        ]
      }}
    >
      <ClientBillDetail />
    </Main>
  )
}
export default ClientBillDetailPage
