import Main from '../components/layout/Main'
import { ROLE } from '../contants/common'
import NewComplaintType from '../features/complaintClassify/createForm'

const NewComplaintTypePage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keySideNav: 'complaint-type-create',
        namePage: 'Thêm loại khiếu nại',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Thêm loại khiếu nại' }
        ]
      }}
    >
      <NewComplaintType />
    </Main>
  )
}
export default NewComplaintTypePage
