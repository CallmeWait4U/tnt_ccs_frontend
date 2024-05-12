import { ROLE } from '../../contants/common'

import Main from '../../components/layout/Main'
import ClientQuoteManagement from '../../features/clientScreen/quoteManagement'

const ClientQuotePage = () => {
  return (
    <Main
      role={ROLE.CUSTOMER}
      pageProps={{
        namePage: 'Danh sách báo giá',
        keySideNav: 'quote',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: `Danh sách báo giá` }
        ]
      }}
    >
      <ClientQuoteManagement />
    </Main>
  )
}
export default ClientQuotePage
