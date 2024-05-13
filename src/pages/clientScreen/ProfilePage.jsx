import Main from '../../components/layout/Main'
import { ROLE } from '../../contants/common'
import ClientProfile from '../../features/clientScreen/profile'

const ClientProfilePage = () => {
  return (
    <Main
      role={ROLE.CUSTOMER}
      pageProps={{
        namePage: 'Thông tin cá nhân',
        keySideNav: 'profile',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: `Thông tin cá nhân` }
        ]
      }}
    >
      <ClientProfile />
    </Main>
  )
}
export default ClientProfilePage
