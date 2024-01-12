import { useLocation } from 'react-router-dom'
import Main from '../components/layout/Main'
import { PATH } from '../contants/common'
import ComplaintDetail from '../features/complaintManagement/detail'

const ComplaintDetailPage = () => {
  const location = useLocation()
  const getCode = () => {
    return location.pathname.split('/')[2]
  }

  return (
    <Main
      pageProps={{
        keySideNav: 'complaint',
        namePage: 'Quản lý khiếu nại',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          {
            title: (
              <a href={PATH.COMPLAINT} style={{ color: 'black' }}>
                Quản lý khiếu nại
              </a>
            )
          },
          { title: getCode() }
        ]
      }}
    >
      <ComplaintDetail />
    </Main>
  )
}
export default ComplaintDetailPage
