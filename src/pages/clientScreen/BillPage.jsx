import { ROLE } from '../../contants/common'

import Main from '../../components/layout/Main'
import ClientBillManagement from '../../features/clientScreen/billManagement'

const ClientBillPage = () => {
  return (
    <Main
      role={ROLE.CUSTOMER}
      pageProps={{
        namePage: 'Danh sách hóa đơn',
        keySideNav: 'bill',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Danh sách hóa đơn' }
        ]
      }}
    >
      <ClientBillManagement />
    </Main>
  )
}
export default ClientBillPage
