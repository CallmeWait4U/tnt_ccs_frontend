import Main from '../components/layout/Main'
import { PATH, ROLE } from '../contants/common'
import TaskDetail from '../features/activityManagement/task'
const TaskDetailPage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keySideNav: 'task',
        namePage: 'Chi tiết nhiệm vụ',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          {
            title: (
              <a href={`${PATH.PHASE}`} style={{ color: 'black' }}>
                Quản lý nhiệm vụ
              </a>
            )
          },
          {
            title: 'Chi tiết nhiệm vụ'
          }
        ]
      }}
    >
      <TaskDetail />
    </Main>
  )
}

export default TaskDetailPage
