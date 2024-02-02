import Main from '../components/layout/Main'
import { ROLE } from '../contants/common'
import AccountManagement from '../features/accountManagement'

const AccountsPage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keySideNav: 'employee',
        namePage: 'Quản lý tài khoản',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Quản lý tài khoản' }
        ]
      }}
    >
      <AccountManagement />
    </Main>
  )
}
export default AccountsPage
