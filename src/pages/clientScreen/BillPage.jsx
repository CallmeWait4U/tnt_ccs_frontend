import { useLocation } from 'react-router-dom'
import { PATH, ROLE } from '../../contants/common'

import Main from '../../components/layout/Main'

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
      <div>Danh sách hóa đơn</div>
    </Main>
  )
}
export default ClientBillPage
