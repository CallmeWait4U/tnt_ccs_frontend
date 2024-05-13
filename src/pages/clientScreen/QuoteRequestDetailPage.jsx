import { PATH, ROLE } from '../../contants/common'

import Main from '../../components/layout/Main'
import ClientQuoteRequestDetail from '../../features/clientScreen/quoteManagement/detailQuoteRequest'

const ClientQuoteRequestDetailPage = () => {
  return (
    <Main
      role={ROLE.CUSTOMER}
      pageProps={{
        namePage: 'Chi tiết yêu cầu báo giá',
        keySideNav: 'quote',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          {
            title: (
              <a href={PATH.CUSTOME_URL.QUOTE} style={{ color: 'black' }}>
                Danh sách báo giá
              </a>
            )
          },
          { title: `Chi tiết yêu cầu báo giá` }
        ]
      }}
    >
      <ClientQuoteRequestDetail />
    </Main>
  )
}
export default ClientQuoteRequestDetailPage
