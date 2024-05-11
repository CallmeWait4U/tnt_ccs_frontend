import { ROLE } from '../../contants/common'

import Main from '../../components/layout/Main'
import ClientHome from '../../features/clientScreen/home'

const ClientHomePage = () => {
  return (
    <Main
      role={ROLE.CUSTOMER}
      pageProps={{
        namePage: 'Trang chủ',
        keySideNav: 'home'
      }}
    >
      <ClientHome />
    </Main>
  )
}
export default ClientHomePage
