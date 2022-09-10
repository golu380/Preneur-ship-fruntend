import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./pages/auth/LoginReg";
import PartnerLogin from "./pages/partner/auth/auth";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import InvestorMain from "./pages/Investor";
import SingleUser from "./pages/Single-User";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import login from "./pages/auth/UserLogin";
import { useSelector } from "react-redux";
import { firebase } from "./firebase";

import React from "react";
import Welcome from "./components/pages/Ent-Welcome-Page";
import Buddy from "./components/pages/Ent-Buddy";
import BVerify from "./components/pages/Ent-Buddy-Verifiication";
import BSuccess from "./components/pages/Ent-Buddy-Success";
import Investor from "./components/pages/Ent-Investor";
import ISuccess from "./components/pages/Ent-Investor-Success";
import IOverView from "./components/pages/Ent-Investor-OverView";
import BChange from "./components/pages/Ent-Buddy-Acc-Change";
import BSetting from "./components/pages/Ent-Buddy-Setting";
import Release from "./components/pages/Ent-Release";
import IPortfolio from "./components/pages/Ent-Investor-Portfolio";
import BHome from "./components/pages/Ent-Buddy-Home";
import BProfile from "./components/pages/Ent-Buddy-Profile";
import FSuccess from "./components/pages/Ent-Final-Success.jsx";
import Selection from "./components/pages/SingleView-Selection";
import Landing from "./pages";
import AccountType from "./pages/started";
import College from "./pages/partner/audience/SingleView-CollegeStudent";
import Employee from "./pages/partner/audience/SingleView-Employee";
import Student from "./pages/partner/audience/SingleView-SchoolStudent";
import PartnerDashboard from "./pages/partner/dashboard/SingleView-DashBoard";
import Explore from "./pages/partner/Explore/Explore";
function App() {
  // const { access_token } = useSelector(state => state.auth)
  const access_token = localStorage.getItem("access_token");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route path="/start" element={<AccountType />} exact />
          <Route path="/app" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/app/single/selection" element={<Selection />} />
            <Route path="/app/investor-main" element={<InvestorMain />} />
            <Route path="/app/single-user" element={<SingleUser />} />
            <Route path="/app/single/explore" element={<Explore />} />
            {/* <Route path="login" element={!access_token ? <LoginReg /> : <Navigate to="/entrepreneur/welcome-page" />} /> */}
            <Route path="/app/entreprenaur/login" element={<LoginReg />} />
            <Route path="/app/partner/login" element={<PartnerLogin />} />
            <Route
              path="/app/partner/dashboard"
              element={<PartnerDashboard />}
            />
            <Route path="/app/partner/selection/school" element={<Student />} />
            <Route
              path="/app/partner/selection/college"
              element={<College />}
            />
            <Route
              path="/app/partner/selection/employee"
              element={<Employee />}
            />
            <Route
              path="/app/sendpasswordresetemail"
              element={<SendPasswordResetEmail />}
            />
            <Route
              path="/app/api/user/reset/:id/:token"
              element={<ResetPassword />}
            />
          </Route>
          {/* <Route path="/entrepreneur/welcome-page" element={access_token ? <Welcome /> : <Navigate to="/login" />} /> */}
          <Route path="/app/entrepreneur/welcome-page" element={<Welcome />} />
          <Route path="/app/entrepreneur/partners" element={<Buddy />} exact />
          <Route
            path="/app/entrepreneur/partners/verification"
            element={<BVerify />}
            exact
          />
          <Route
            path="/app/entrepreneur/partners/success"
            element={<BSuccess />}
            exact
          />
          <Route
            path="/app/entrepreneur/portfolio"
            element={<Investor />}
            exact
          />

          <Route
            path="/app/enterpreneur/portfolio/success"
            element={<ISuccess />}
            exact
          />
          <Route
            path="/app/enterpreneur/portfolio/overview"
            element={<IOverView />}
            exact
          />
          <Route
            path="/app/entrepreneur/partners/setting"
            element={<BSetting />}
            exact
          />
          <Route
            path="/app/buddy-account-type-change"
            element={<BChange />}
            exact
          />

          <Route
            path="/app/enterpreneur/portfolio/details"
            element={<IPortfolio />}
            exact
          />
          <Route path="/app/entrepreneur/release" element={<Release />} exact />
          <Route
            path="/app/entrepreneur/partners/home"
            element={<BHome />}
            exact
          />
          <Route
            path="/app/entrepreneur/partners/profile"
            element={<BProfile />}
            exact
          />

          <Route
            path="/app/enterpreneur/final-success"
            element={<FSuccess />}
            exact
          />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// // import { BrowserRouter, Route,Routes } from "react-router-dom";
// function App() {
//   return (
//     <BrowserRouter>
//      <Routes>

//       <Route path="/entrepreneur/welcome-page" element={<Welcome/>} exact />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
