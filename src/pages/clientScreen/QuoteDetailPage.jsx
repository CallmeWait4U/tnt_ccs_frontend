import { useLocation } from 'react-router-dom'
import { PATH, ROLE } from '../../contants/common'

import Main from '../../components/layout/Main'

const ClientQuoteDetailPage = () => {
  const location = useLocation()
  const getCode = () => {
    return location.pathname.split('/')[2]
  }

  return (
    <Main
      role={ROLE.CUSTOMER}
      pageProps={{
        namePage: 'Quản lý báo giá',
        keySideNav: 'quote',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          {
            title: (
              <a href={PATH.QUOTE} style={{ color: 'black' }}>
                Quản lý báo giá
              </a>
            )
          },
          { title: `Chi tiết báo giá${getCode()}` }
        ]
      }}
    >
      <div>Chi tiết báo giá</div>
    </Main>
  )
}
export default ClientQuoteDetailPage
