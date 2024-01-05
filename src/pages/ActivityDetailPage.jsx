import Main from '../components/layout/Main'
import ActivityDetail from '../features/activityManagement/detail'

const ActivityDetailPage = () => {
  return (
    <Main
      pageProps={{
        namePage: 'Quản lý hoạt động',
        keySideNav: 'activity',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Quản lý hoạt động', path: '/activity' },
          { title: 'Chi tiết hoạt động' }
        ]
      }}
    >
      <ActivityDetail />
    </Main>
  )
}
export default ActivityDetailPage
