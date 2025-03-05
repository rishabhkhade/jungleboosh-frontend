import { lazy } from "react";

// home
const Home = lazy(() => import("./pages/sellerHome/SellerHome.js"));
// login
const Login = lazy(() => import("./pages/login/Login.js"));
const ForgotPassword = lazy(() =>
  import("./pages/forgotpassword/ForgotPassword.js")
);
const ChangePassword = lazy(() =>
  import("./pages/changepassword/ChangePassword.js")
);
const Register = lazy(() => import("./pages/register/Register.js"));

// dashboard;

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard.js"));

const SellerBenefits = lazy(() =>
  import("./pages/seller-benifits/SellerBenefits.js")
);

const HelpSupport = lazy(() => import("./pages/help-support/HelpSupport.js"));

// rotuing
export const routes = [
  // authentication
  {
    path: "/",
    exact: true,
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    exact: true,
    name: "login",
    component: Login,
  },
  {
    path: "/forgotpassword",
    exact: true,
    name: "forgotpassword",
    component: ForgotPassword,
  },
  {
    path: "/ChangePassword",
    exact: true,
    name: "ChangePassword",
    component: ChangePassword,
  },
  {
    path: "/register",
    exact: true,
    name: "register",
    component: Register,
  },

  // dashboard

  {
    path: "/dashboard",
    exact: true,
    name: "dashboard",
    component: Dashboard,
  },

  //seller-benifits
  {
    path: "/seller-benefits",
    exact: true,
    name: "seller-benefits",
    component: SellerBenefits,
  },

  //help & support
  {
    path: "/help-support",
    exact: true,
    name: "help-support",
    component: HelpSupport,
  },
];
