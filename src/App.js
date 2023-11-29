import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/reset.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/sign-up" exact element={SignUp} />
        <Route path="/sign-in" exact element={SignIn} />

        <Route exact path="/dashboard" element={<Main children={<Home />} />} />
        <Route exact path="/tables" element={<Main children={<Tables />} />} />
        <Route
          exact
          path="/billing"
          element={<Main children={<Billing />} />}
        />

        <Route
          exact
          path="/profile"
          element={<Main children={<Profile />} />}
        />
        <Route from="" to="/dashboard" />
      </Routes>
    </div>
  );
}

export default App;
