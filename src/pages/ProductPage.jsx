import Main from '../components/layout/Main'
import ProductManagement from '../features/productManagement'

const ProductsPage = () => {
  return (
    <Main
      pageProps={{
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
