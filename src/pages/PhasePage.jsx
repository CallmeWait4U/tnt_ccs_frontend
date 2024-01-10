import Main from '../components/layout/Main'
import PhaseManagement from '../features/phase'

const PhasePage = () => {
  return (
    <Main
      pageProps={{
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
