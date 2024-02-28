import { useLocation } from 'react-router-dom'
import { ROLE } from '../../contants/common'

import Main from '../../components/layout/Main'
import ClientQuoteManagement from '../../features/clientScreen/quoteManagement'

const ClientQuotePage = () => {
  const location = useLocation()
  const getCode = () => {
    return location.pathname.split('/')[2]
  }

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
