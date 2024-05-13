import React from 'react'
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

import AccountDetailPage from '../pages/AccountDetailPage'
import AccountsPage from '../pages/AccountsPage'
import ComplaintClassifyPage from '../pages/ComplaintClassifyPage'
import ComplaintDetailPage from '../pages/ComplaintDetailPage'
import ComplaintPage from '../pages/ComplaintPage'
import NewComplaintTypePage from '../pages/ComplaintTypeCreatePage'
import HomePage from '../pages/HomePage'
import NewAccountPage from '../pages/NewAccountPage'
import NewPhasePage from '../pages/NewPhasePage'
import NewProductPage from '../pages/NewProductPage'
import NotFoundPage from '../pages/NotFoundPage'
import PhaseDetailPage from '../pages/PhaseDetailPage'
import PhasePage from '../pages/PhasePage'
import ProductDetailPage from '../pages/ProductDetailPage'
import ProductsPage from '../pages/ProductPage'
import SignInPage from '../pages/SignInPage'
import TaskDetailPage from '../pages/TaskDetailPage'
import ClientBillDetailPage from '../pages/clientScreen/BillDetailPage'
import ClientBillPage from '../pages/clientScreen/BillPage'
import ClientComplaintDetailPage from '../pages/clientScreen/ComplaintDetailPage'
import ClientComplaintPage from '../pages/clientScreen/ComplaintPage'
import ClientHomePage from '../pages/clientScreen/HomePage'
import ClientMessagePage from '../pages/clientScreen/MessagePage'
import ClientNewComplaintPage from '../pages/clientScreen/NewComplaintPage'
import ClientProfilePage from '../pages/clientScreen/ProfilePage'
import ClientQuoteDetailPage from '../pages/clientScreen/QuoteDetailPage'
import ClientQuotePage from '../pages/clientScreen/QuotePage'
import ClientQuoteRequestDetailPage from '../pages/clientScreen/QuoteRequestDetailPage'
import CompanyRoute from './CompanyRoute'
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
  { path: PATH.DOMAIN_HOME, element: <CompanyRoute /> },
  { path: PATH.BUSSINESSREGISTER, element: <BusinessRegister /> },
  { path: PATH.CUSTOMERLANDINGPAGE, element: <CustomerLanding /> },
  { path: PATH.DOMAIN_SIGNIN, element: <SignInPage /> },
  { path: PATH.SIGNUP, element: <CustomerLanding /> },
  { path: PATH.HOME, element: withPrivateRoute(HomePage)() },
  { path: PATH.NOT_FOUND, element: <NotFoundPage /> },
  { path: PATH.CUSTOMER, element: withPrivateRoute(Customer)() },
  {
    path: PATH.CUSTOMERDETAIL,
    element: withPrivateRoute(CustomerDetailPage)()
  },
  {
    path: PATH.ACTIVITY,
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
    path: PATH.ACCOUNT,
    element: withPrivateRoute(AccountsPage)()
  },
  {
    path: PATH.NEWACCOUNT,
    element: withPrivateRoute(NewAccountPage)()
  },
  {
    path: PATH.ACCOUNTDETAIL,
    element: withPrivateRoute(AccountDetailPage)()
  },
  {
    path: PATH.PRODUCT,
    element: withPrivateRoute(ProductsPage)()
  },
  {
    path: PATH.PRODUCTDETAIL,
    element: withPrivateRoute(ProductDetailPage)()
  },
  {
    path: PATH.NEWPRODUCT,
    element: withPrivateRoute(NewProductPage)()
  },
  {
    path: PATH.COMPLAINT,
    element: withPrivateRoute(ComplaintPage)()
  },
  {
    path: PATH.COMPLAINTDETAIL,
    element: withPrivateRoute(ComplaintDetailPage)()
  },
  {
    path: PATH.COMPLAINTCLASSIFY,
    element: withPrivateRoute(ComplaintClassifyPage)()
  },
  {
    path: PATH.COMPLAINTTYPECREATE,
    element: withPrivateRoute(NewComplaintTypePage)()
  },
  {
    path: PATH.PHASE,
    element: withPrivateRoute(PhasePage)()
  },
  {
    path: PATH.PHASEDETAIL,
    element: withPrivateRoute(PhaseDetailPage)()
  },
  {
    path: PATH.TASKDETAIL,
    element: withPrivateRoute(TaskDetailPage)()
  },
  {
    path: PATH.NEWPHASE,
    element: withPrivateRoute(NewPhasePage)()
  },
  {
    path: PATH.PROFILE,
    element: withPrivateRoute(ProfilePage)()
  },
  {
    path: PATH.CUSTOME_URL.HOME,
    element: withPrivateRoute(ClientHomePage)()
  },
  {
    path: PATH.CUSTOME_URL.COMPLAINT,
    element: withPrivateRoute(ClientComplaintPage)()
  },
  {
    path: PATH.CUSTOME_URL.NEWCOMPLAINT,
    element: withPrivateRoute(ClientNewComplaintPage)()
  },
  {
    path: PATH.CUSTOME_URL.COMPLAINTDETAIL,
    element: withPrivateRoute(ClientComplaintDetailPage)()
  },
  {
    path: PATH.CUSTOME_URL.BILL,
    element: withPrivateRoute(ClientBillPage)()
  },
  {
    path: PATH.CUSTOME_URL.BILLDETAIL,
    element: withPrivateRoute(ClientBillDetailPage)()
  },
  {
    path: PATH.CUSTOME_URL.QUOTE,
    element: withPrivateRoute(ClientQuotePage)()
  },
  {
    path: PATH.CUSTOME_URL.QUOTEDETAIL,
    element: withPrivateRoute(ClientQuoteDetailPage)()
  },
  {
    path: PATH.CUSTOME_URL.QUOTEREQUESTDETAIL,
    element: withPrivateRoute(ClientQuoteRequestDetailPage)()
  },
  {
    path: PATH.CUSTOME_URL.MESSAGE,
    element: withPrivateRoute(ClientMessagePage)()
  },

  {
    path: PATH.CUSTOME_URL.PROFILE,
    element: withPrivateRoute(ClientProfilePage)()
  }
]

export default routesLayout
