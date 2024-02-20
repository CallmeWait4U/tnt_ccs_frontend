import { useLocation } from 'react-router-dom'
import { PATH, ROLE } from '../../contants/common'

import Main from '../../components/layout/Main'
import ClientQuoteRequestDetail from '../../features/clientScreen/quoteManagement/detailQuoteRequest'

const ClientQuoteRequestDetailPage = () => {
  const location = useLocation()
  const getCode = () => {
    return location.pathname.split('/')[3]
  }

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
          { title: `Chi tiết yêu cầu báo giá ${getCode()}` }
        ]
      }}
    >
      <ClientQuoteRequestDetail />
    </Main>
  )
}
export default ClientQuoteRequestDetailPage