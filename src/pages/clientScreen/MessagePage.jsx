import { useLocation } from 'react-router-dom'
import { PATH, ROLE } from '../../contants/common'

import Main from '../../components/layout/Main'
import ClientMassage from '../../features/clientScreen/message'

const ClientMessagePage = () => {
  const location = useLocation()

  return (
    <Main
      role={ROLE.CUSTOMER}
      pageProps={{
        namePage: 'Tin nhắn',
        keySideNav: 'message',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          {
            title: (
              <a href={PATH.CUSTOME_URL.MESSAGE} style={{ color: 'black' }}>
                Tin nhắn
              </a>
            )
          }
        ]
      }}
    >
      <ClientMassage />
    </Main>
  )
}
export default ClientMessagePage
