import Main from '../components/layout/Main'
import NewProduct from '../features/productManagement/form'

const NewProductPage = () => {
  return (
    <Main
      pageProps={{
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
