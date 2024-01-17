import Main from '../components/layout/Main'
import { ROLE } from '../contants/common'
import Profile from '../features/old/Profile'

const ProfilePage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        namePage: 'Thông tin cá nhân',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Thông tin cá nhân' }
        ]
      }}
    >
      <Profile />
    </Main>
  )
}
export default ProfilePage
