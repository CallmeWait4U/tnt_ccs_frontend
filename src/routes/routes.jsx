import React from 'react'
import { Navigate } from 'react-router-dom'
import Main from '../components/layout/Main'
import { PATH } from '../contants/common'
import ActivityManagement from '../features/activityManagement'
import ActivityDetail from '../features/activityManagement/detail'
import BusinessRegister from '../features/businessRegister/BusinessRegister'
import CustomerDetail from '../features/customerManagement/detail'
import CustomerForm from '../features/customerManagement/form/CustomerForm'
import LandingPage from '../features/landingPage'
import CustomerLanding from '../features/pageForCustomer/CustomerLanding'
import Billing from '../pages/Billing'
import Customer from '../pages/Customer'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Tables from '../pages/Tables'

const routesLayout = [
  { path: PATH.LANDINGPAGE, element: <LandingPage /> },
  { path: PATH.BUSSINESSREGISTER, element: <BusinessRegister /> },
  { path: PATH.CUSTOMERLANDINGPAGE, element: <CustomerLanding /> },
  {
    path: PATH.SIGNIN,
    element: <SignIn />
  },
  {
    path: PATH.SIGNUP,
    element: <SignUp />
  },
  {
    path: PATH.HOME,
<<<<<<< HEAD
    element: <Navigate to={PATH.CUSTOMER} />
  },
  {
    path: PATH.CUSTOMER,
    element: <Main namePage={'Quản lý khách hàng'}><Customer /></Main>
=======
    element: <Navigate to={PATH.SIGNIN} />,
  },
  {
    path: PATH.CUSTOMER,
    element: (
      <Main children={<Customer />} namePage={"Quản lý khách hàng"} index={1} />
    ),
>>>>>>> feat/customer-detail
  },
  {
    path: PATH.CUSTOMERDETAIL,
    element: (
<<<<<<< HEAD
      <Main namePage={'Quản lý khách hàng'}><CustomerDetail /></Main>
    )
=======
      <Main
        children={<CustomerDetail />}
        namePage={"Quản lý khách hàng"}
        index={2}
      />
    ),
>>>>>>> feat/customer-detail
  },
  {
    path: PATH.ACTIVITYMANAGEMENT,
    element: (
<<<<<<< HEAD
      <Main namePage={'Quản lý hoạt động'}><ActivityManagement /></Main>
    )
=======
      <Main
        children={<ActivityManagement />}
        namePage={"Quản lý hoạt động"}
        index={3}
      />
    ),
>>>>>>> feat/customer-detail
  },
  {
    path: PATH.ACTIVITYDETAIL,
    element: (
      <Main namePage={'Quản lý hoạt động'}><ActivityDetail /></Main>
    )
  },
  {
    path: PATH.NEWCUSTOMER,
    element: (
      <Main namePage={'Quản lý khách hàng'}><CustomerForm /></Main>
    )
  },
  {
    path: PATH.DASHBOARD,
    element: <Main namePage={'Thống kê - báo cáo'}><Dashboard /></Main>
  },
  {
    path: PATH.PROFILE,
    element: <Main namePage={'Thông tin cá nhân'}><Profile /></Main>
  },
  {
    path: PATH.BILLING,
    element: <Main><Billing /></Main>
  },
  { path: PATH.TABLE, element: <Main><Tables /></Main> }
]

export default routesLayout
