import Main from '../components/layout/Main'
import { ROLE } from '../contants/common'
import ProductManagement from '../features/productManagement'

const ProductsPage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keySideNav: 'product',
        namePage: 'Quản lý sản phẩm',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Quản lý sản phẩm' }
        ]
      }}
    >
      <ProductManagement />
    </Main>
  )
}
export default ProductsPage
