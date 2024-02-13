import Main from '../components/layout/Main'
import { PATH, ROLE } from '../contants/common'
import PhaseDetail from '../features/phaseManagement/detail'

const PhaseDetailPage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keySideNav: 'phase',
        namePage: 'Quản lý giai đoạn',
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
            title: 'Chi tiết giai đoạn'
          }
        ]
      }}
    >
      <PhaseDetail />
    </Main>
  )
}

export default PhaseDetailPage
