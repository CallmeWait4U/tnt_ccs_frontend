import Main from '../components/layout/Main'
import PhaseManagement from '../features/phaseManagement'

const PhasePage = () => {
  return (
    <Main
      pageProps={{
        keySideNav: 'phase',
        namePage: 'Quản lý giai đoạn',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Danh sách giai đoạn' }
        ]
      }}
    >
      <PhaseManagement />
    </Main>
  )
}
export default PhasePage
