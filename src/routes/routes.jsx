import { Routes, Route, Navigate } from "react-router-dom";

import { PATH } from "../contants/common";
import Dashboard from "../pages/Dashboard";
import Tables from "../pages/Tables";
import Billing from "../pages/Billing";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Main from "../components/layout/Main";
import Customer from "../pages/Customer";
import CustomerDetail from "../features/customerManagement/detail";
import LandingPage from "../features/landingPage";
import BusinessRegister from "../features/businessRegister/BusinessRegister";
import CustomerLanding from "../features/pageForCustomer/CustomerLanding";
import CustomerForm from "../features/customerManagement/form/CustomerForm";
import ActivityManagement from "../features/activityManagement";
import ActivityDetail from "../features/activityManagement/detail";

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
    element: <Navigate to={PATH.SIGNIN} />,
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
    element: <Main children={<Dashboard />} />,
  },
  {
    path: PATH.PROFILE,
    element: <Main children={<Profile />} />,
  },
  {
    path: PATH.BILLING,
    element: <Main children={<Billing />} />,
  },
  { path: PATH.TABLE, element: <Main children={<Tables />} /> },
];
