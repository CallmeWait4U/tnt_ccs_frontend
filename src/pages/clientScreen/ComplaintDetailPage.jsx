import { useLocation } from 'react-router-dom'
import { PATH, ROLE } from '../../contants/common'

import Main from '../../components/layout/Main'
import ClientComplaintDetail from '../../features/clientScreen/complaintManagement/detail'

const ClientComplaintDetailPage = () => {
  const location = useLocation()
  const getCode = () => {
    return location.pathname.split('/')[2]
  }

  return (
    <Main
      role={ROLE.CUSTOMER}
      pageProps={{
        namePage: 'Chi tiết khiếu nại',
        keySideNav: 'complaint',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          {
            title: (
              <a href={PATH.CUSTOME_URL.COMPLAINT} style={{ color: 'black' }}>
                Danh sách khiếu nại
              </a>
            )
          },
          { title: `Chi tiết khiếu nại` }
        ]
      }}
    >
      <ClientComplaintDetail />
    </Main>
  )
}
export default ClientComplaintDetailPage
