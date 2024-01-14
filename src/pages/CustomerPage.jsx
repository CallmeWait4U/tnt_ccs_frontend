import React from 'react'
import Main from '../components/layout/Main'
import { ROLE } from '../contants/common'
import CustomerManagement from '../features/customerManagement'

const CustomerPage = () => {
  return (
    <Main
      role={ROLE.ADMIN}
      pageProps={{
        keySideNav: 'customer',
        namePage: 'Quản lý khách hàng',
        breadcumbItems: [
          { title: 'Trang chủ', path: '/' },
          { title: 'Quản lý khách hàng', path: '/customer' }
        ]
      }}
    >
      <CustomerManagement />
    </Main>
  )
}
export default CustomerPage
