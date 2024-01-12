import { useLocation } from 'react-router-dom'
import Main from '../components/layout/Main'
import { PATH } from '../contants/common'
import ActivityDetail from '../features/activityManagement/detail'

const ActivityDetailPage = () => {
  const location = useLocation()
  const getCode = () => {
    return location.pathname.split('/')[2]
  }

  return (
    <Main
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
          { title: `Chi tiết loại hoạt động ${getCode()}` }
        ]
      }}
    >
      <ActivityDetail />
    </Main>
  )
}
export default ActivityDetailPage
