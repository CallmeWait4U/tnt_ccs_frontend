import { Routes, Route, Navigate } from "react-router-dom";

import { PATH } from "../contants/common";
import Home from "../pages/Home";
import Tables from "../pages/Tables";
import Billing from "../pages/Billing";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Main from "../components/layout/Main";
import Customer from "../pages/Customer";
import CustomerDetail from "../features/customer/detail";
import LandingPage from "../features/landingPage";
import BusinessRegister from "../features/businessRegister/BusinessRegister";
// const withPrivateRoute = (Component: any) => {
//   return () => (
//     <PrivateRoute>
//       <Component />
//     </PrivateRoute>
//   );
// };

export const routes_layout = [
  { path: PATH.LANDINGPAGE, element: <LandingPage /> },
  { path: PATH.BUSSINESSREGISTER, element: <BusinessRegister /> },
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
    element: <Main children={<Home />} />,
  },
  {
    path: PATH.CUSTOMER,
    element: <Main children={<Customer />} />,
  },
  {
    path: PATH.DASHBOARD,
    element: <Main children={<Home />} />,
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
  {
    path: PATH.CUSTOMERDETAIL,
    element: <Main children={<CustomerDetail />} />,
  },
];
