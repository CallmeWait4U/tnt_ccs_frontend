import Main from '../components/layout/Main'
import Profile from '../features/old/Profile'

const ProfilePage = () => {
  return (
    <Main
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
