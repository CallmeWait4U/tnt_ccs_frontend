import { useLocation } from 'react-router-dom'
import Main from '../components/layout/Main'
import { PATH, ROLE } from '../contants/common'
import ProductDetail from '../features/productManagement/detail'
const ProductDetailPage = () => {
  const location = useLocation()
  const getCode = () => {
    const info = location.pathname.split('/')[2].split('&')
    return info[1]
  }
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
          },
          {
            title: getCode()
          }
        ]
      }}
    >
      <ProductDetail />
    </Main>
  )
}
export default ProductDetailPage
