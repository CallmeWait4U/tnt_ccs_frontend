import Main from '../components/layout/Main'
import { ROLE } from '../contants/common'
import UserProfile from '../features/profile'

const ProfilePage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keySideNav: 'profile',
        namePage: 'Thông tin cá nhân',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Thông tin cá nhân' }
        ]
      }}
    >
      <UserProfile />
    </Main>
  )
}
export default ProfilePage
