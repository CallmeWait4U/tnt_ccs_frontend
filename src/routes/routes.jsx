import React from 'react'
import { Navigate } from 'react-router-dom'
import { PATH } from '../contants/common'
import BusinessRegister from '../features/businessRegister/BusinessRegister'
import LandingPage from '../features/landingPage'
import CustomerLanding from '../features/pageForCustomer/CustomerLanding'
import ActivityDetailPage from '../pages/ActivityDetailPage'
import ActivityPage from '../pages/ActivityPage'
import CustomerDetailPage from '../pages/CustomerDetailPage'
import Customer from '../pages/CustomerPage'
import DashboardPage from '../pages/DashboardPage'
import NewCustomerPage from '../pages/NewCustomerPage'
import ProfilePage from '../pages/ProfilePage'

import BussinessRegisterPage from '../pages/BusinessRegisterPage'
import SignInPage from '../pages/SignInPage'
import PrivateRoute from './PrivateRoute'

const withPrivateRoute = (Component) => {
  return () => (
    <PrivateRoute>
      <Component />
    </PrivateRoute>
  )
}

const routesLayout = [
  { path: PATH.LANDINGPAGE, element: <LandingPage /> },
  { path: PATH.BUSSINESSREGISTER, element: <BusinessRegister /> },
  { path: PATH.CUSTOMERLANDINGPAGE, element: <CustomerLanding /> },
  { path: PATH.SIGNIN, element: <SignInPage /> },
  { path: PATH.SIGNUP, element: <BussinessRegisterPage /> },
  { path: PATH.HOME, element: <Navigate to={PATH.CUSTOMER} /> },
  { path: PATH.CUSTOMER, element: withPrivateRoute(Customer)() },
  {
    path: PATH.CUSTOMERDETAIL,
    element: withPrivateRoute(CustomerDetailPage)()
  },
  {
    path: PATH.ACTIVITYMANAGEMENT,
    element: withPrivateRoute(ActivityPage)()
  },
  {
    path: PATH.ACTIVITYDETAIL,
    element: withPrivateRoute(ActivityDetailPage)()
  },
  {
    path: PATH.NEWCUSTOMER,
    element: withPrivateRoute(NewCustomerPage)()
  },
  {
    path: PATH.DASHBOARD,
    element: withPrivateRoute(DashboardPage)()
  },
  {
    path: PATH.PROFILE,
    element: withPrivateRoute(ProfilePage)()
  }
]

export default routesLayout
