import Main from '../components/layout/Main'
import { ROLE } from '../contants/common'
import ActivityManagement from '../features/activityManagement'

const ActivityPage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keySideNav: 'activity',
        namePage: 'Quản lý hoạt động',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Quản lý hoạt động' }
        ]
      }}
    >
      <ActivityManagement />
    </Main>
  )
}
export default ActivityPage
