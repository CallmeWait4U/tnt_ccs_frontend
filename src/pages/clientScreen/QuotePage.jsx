import { useLocation } from 'react-router-dom'
import { PATH, ROLE } from '../../contants/common'

import Main from '../../components/layout/Main'

const ClientQuotePage = () => {
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
          { title: `Danh sách báo giá${getCode()}` }
        ]
      }}
    >
      <div>Danh sách báo giá</div>
    </Main>
  )
}
export default ClientQuotePage
