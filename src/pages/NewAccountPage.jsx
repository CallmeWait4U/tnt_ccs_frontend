import Main from '../components/layout/Main'
import { PATH, ROLE } from '../contants/common'
import NewAccount from '../features/accountManagement/form/NewAccount'

const NewAccountPage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keySideNav: 'employee',
        namePage: 'Quản lý tài khoản',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          {
            title: (
              <a href={PATH.ACCOUNT} style={{ color: 'black' }}>
                Quản lý tài khoản
              </a>
            )
          },
          { title: 'Tạo mới tài khoản' }
        ]
      }}
    >
      <NewAccount />
    </Main>
  )
}
export default NewAccountPage
