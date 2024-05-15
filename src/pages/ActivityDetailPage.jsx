// import { useLocation } from 'react-router-dom'
import Main from '../components/layout/Main'
import { PATH, ROLE } from '../contants/common'
import ActivityDetail from '../features/activityManagement/detail'

const ActivityDetailPage = () => {
  // const location = useLocation()
  // const getCode = () => {
  //   return location.pathname.split('/')[2]
  // }

  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        namePage: 'Quản lý hoạt động',
        keySideNav: 'activity',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          {
            title: (
              <a href={PATH.ACTIVITY} style={{ color: 'black' }}>
                Quản lý hoạt động
              </a>
            )
          },
          { title: `Chi tiết hoạt động` }
        ]
      }}
    >
      <ActivityDetail />
    </Main>
  )
}
export default ActivityDetailPage
