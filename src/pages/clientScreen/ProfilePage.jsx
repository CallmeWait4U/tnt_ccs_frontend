import { useLocation } from 'react-router-dom'
import { PATH, ROLE } from '../../contants/common'

import Main from '../../components/layout/Main'

const ClientProfilePage = () => {
  const location = useLocation()
  const getCode = () => {
    return location.pathname.split('/')[2]
  }

  return (
    <Main
      role={ROLE.CUSTOMER}
      pageProps={{
        namePage: 'Thông tin cá nhân',
        keySideNav: 'quote',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          {
            title: <a href={PATH.QUOTE} style={{ color: 'black' }}></a>
          },
          { title: `Chi tiết báo giá${getCode()}` }
        ]
      }}
    >
      <div>thông tin cá nhân</div>
    </Main>
  )
}
export default ClientProfilePage
