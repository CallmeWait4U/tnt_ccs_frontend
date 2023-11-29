import { Routes, Route, Navigate } from "react-router-dom";

import { PATH } from "../contants/common";
import Home from "../pages/Home";
import Tables from "../pages/Tables";
import Billing from "../pages/Billing";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Main from "../components/layout/Main";
// const withPrivateRoute = (Component: any) => {
//   return () => (
//     <PrivateRoute>
//       <Component />
//     </PrivateRoute>
//   );
// };

export const routes_layout = [
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
];
