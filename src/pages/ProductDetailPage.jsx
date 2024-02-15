import Main from '../components/layout/Main'
import { PATH, ROLE } from '../contants/common'
import ProductDetail from '../features/productManagement/detail'

const ProductDetailPage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
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
