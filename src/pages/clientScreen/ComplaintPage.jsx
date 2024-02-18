import { useLocation } from 'react-router-dom'
import { ROLE } from '../../contants/common'

import Main from '../../components/layout/Main'
import ClientComplaintManagement from '../../features/clientScreen/complaintManagement'

const ClientComplaintPage = () => {
  const location = useLocation()
  const getCode = () => {
    return location.pathname.split('/')[2]
  }

  return (
    <Main
      role={ROLE.CUSTOMER}
      pageProps={{
        namePage: 'Danh sách khiếu nại',
        keySideNav: 'complaint',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Danh sách khiếu nại' }
        ]
      }}
    >
      <ClientComplaintManagement />
    </Main>
  )
}
export default ClientComplaintPage
