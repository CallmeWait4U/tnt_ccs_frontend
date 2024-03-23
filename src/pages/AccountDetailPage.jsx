import { useLocation } from 'react-router-dom'
import Main from '../components/layout/Main'
import { PATH, ROLE } from '../contants/common'
import AccountDetail from '../features/accountManagement/detail/AccountDetail'
const AccountDetailPage = () => {
  const location = useLocation()
  const getCode = () => {
    const info = location.pathname.split('/')[2].split('&')
    return info[1]
  }
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
          },
          {
            title: getCode()
          }
        ]
      }}
    >
      <AccountDetail />
    </Main>
  )
}
export default AccountDetailPage
