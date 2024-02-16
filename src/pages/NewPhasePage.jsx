import Main from '../components/layout/Main'
import { PATH, ROLE } from '../contants/common'
import NewPhase from '../features/phaseManagement/form'

const NewPhasePage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keyNavbar: 'phase',
        namePage: 'Tạo mới giai đoạn',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          {
            title: (
              <a href={`${PATH.PHASE}`} style={{ color: 'black' }}>
                Quản lý giai đoạn
              </a>
            )
          },
          {
            title: 'Tạo mới giai đoạn'
          }
        ]
      }}
    >
      <NewPhase />
    </Main>
  )
}

export default NewPhasePage
