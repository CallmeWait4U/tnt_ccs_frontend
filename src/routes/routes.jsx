import { Navigate } from "react-router-dom";

import Main from "../components/layout/Main";
import { PATH } from "../contants/common";
import ActivityManagement from "../features/activityManagement";
import ActivityDetail from "../features/activityManagement/detail";
import BusinessRegister from "../features/businessRegister/BusinessRegister";
import CustomerDetail from "../features/customerManagement/detail";
import CustomerForm from "../features/customerManagement/form/CustomerForm";
import LandingPage from "../features/landingPage";
import CustomerLanding from "../features/pageForCustomer/CustomerLanding";
import Billing from "../pages/Billing";
import Customer from "../pages/Customer";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Tables from "../pages/Tables";

export const routes_layout = [
  { path: PATH.LANDINGPAGE, element: <LandingPage /> },
  { path: PATH.BUSSINESSREGISTER, element: <BusinessRegister /> },
  { path: PATH.CUSTOMERLANDINGPAGE, element: <CustomerLanding /> },
  {
    path: PATH.SIGNIN,
    element: <SignIn />,
  },
  {
    path: PATH.SIGNUP,
    element: <SignUp />,
  },
  {
    path: PATH.HOME,
    element: <Navigate to={PATH.CUSTOMER} />,
  },
  {
    path: PATH.CUSTOMER,
    element: <Main children={<Customer />} namePage={"Quản lý khách hàng"} />,
  },
  {
    path: PATH.CUSTOMERDETAIL,
    element: (
      <Main children={<CustomerDetail />} namePage={"Quản lý khách hàng"} />
    ),
  },
  {
    path: PATH.ACTIVITYMANAGEMENT,
    element: (
      <Main children={<ActivityManagement />} namePage={"Quản lý hoạt động"} />
    ),
  },
  {
    path: PATH.ACTIVITYDETAIL,
    element: (
      <Main children={<ActivityDetail />} namePage={"Quản lý hoạt động"} />
    ),
  },
  {
    path: PATH.NEWCUSTOMER,
    element: (
      <Main children={<CustomerForm />} namePage={"Quản lý khách hàng"} />
    ),
  },
  {
    path: PATH.DASHBOARD,
    element: <Main children={<Dashboard />} namePage={"Thống kê - báo cáo"} />,
  },
  {
    path: PATH.PROFILE,
    element: <Main children={<Profile />} namePage={"Thông tin cá nhân"} />,
  },
  {
    path: PATH.BILLING,
    element: <Main children={<Billing />} />,
  },
  { path: PATH.TABLE, element: <Main children={<Tables />} /> },
];
