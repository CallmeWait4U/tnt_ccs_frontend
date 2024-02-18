import Main from '../../components/layout/Main'
import { PATH, ROLE } from '../../contants/common'
import ClientNewComplaint from '../../features/clientScreen/complaintManagement/form'

const ClientNewComplaintPage = () => {
  return (
    <Main
      role={ROLE.CUSTOMER}
      pageProps={{
        namePage: 'Tạo mới khiếu nại',
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
          {
            title: 'Tạo mới khiếu nại'
          }
        ]
      }}
    >
      <ClientNewComplaint />
    </Main>
  )
}

export default ClientNewComplaintPage
