import Main from '../components/layout/Main'
import { PATH, ROLE } from '../contants/common'
import AccountDetail from '../features/accountManagement/detail/AccountDetail'

const AccountDetailPage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keySideNav: 'employee',
        namePage: 'Quản lý tổ chức',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          {
            title: (
              <a href={PATH.ACCOUNT} style={{ color: 'black' }}>
                Quản lý tài khoản
              </a>
            )
          },
          {
            title: 'Chi tiết tài khoản'
          }
        ]
      }}
    >
      <AccountDetail />
    </Main>
  )
}
export default AccountDetailPage
