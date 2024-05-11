import Main from '../components/layout/Main'
import { ROLE } from '../contants/common'
import CompanyHome from '../features/home'
const HomePage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        namePage: 'Trang chủ',
        keySideNav: 'home'
      }}
    >
      <CompanyHome />
    </Main>
  )
}
export default HomePage
