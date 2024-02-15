import Main from '../components/layout/Main'
import { PATH, ROLE } from '../contants/common'
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
          {
            title: (
              <a href={`${PATH.PRODUCT}`} style={{ color: 'black' }}>
                Quản lý sản phẩm
              </a>
            )
          },
          {
            title: 'Tạo mới sản phẩm'
          }
        ]
      }}
    >
      <NewProduct />
    </Main>
  )
}
export default NewProductPage
