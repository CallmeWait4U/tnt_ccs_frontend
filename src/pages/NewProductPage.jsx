import Main from '../components/layout/Main'
import { ROLE } from '../contants/common'
import NewProduct from '../features/productManagement/form'

const NewProductPage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keyNavbar: 'product',
        namePage: 'Quản lý sản phẩm',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Danh sách sản phẩm', path: '/' },
          {
            title: 'Thêm sản phẩm mới'
          }
        ]
      }}
    >
      <NewProduct />
    </Main>
  )
}
export default NewProductPage
