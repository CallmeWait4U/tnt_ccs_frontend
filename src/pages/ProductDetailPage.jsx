import Main from '../components/layout/Main'
import { ROLE } from '../contants/common'
import ProductDetail from '../features/productManagement/detail'

const ProductDetailPage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        namePage: 'Quản lý sản phẩm',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Danh sách sản phẩm', path: '/' },
          {
            title: 'Chi tiết sản phẩm'
          }
        ]
      }}
    >
      <ProductDetail />
    </Main>
  )
}
export default ProductDetailPage
