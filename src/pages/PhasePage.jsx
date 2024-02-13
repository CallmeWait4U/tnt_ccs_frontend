import Main from '../components/layout/Main'
import { ROLE } from '../contants/common'
import PhaseManagement from '../features/phaseManagement'

const PhasePage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keySideNav: 'phase',
        namePage: 'Quản lý giai đoạn',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Quản lý giai đoạn' }
        ]
      }}
    >
      <PhaseManagement />
    </Main>
  )
}
export default PhasePage
