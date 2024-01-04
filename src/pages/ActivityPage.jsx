import Main from '../components/layout/Main'
import ActivityManagement from '../features/activityManagement'

const ActivityPage = () => {
  return (
    <Main
      pageProps={{
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
