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
const Products = lazy(() => import("./pages/products/Products.jsx"));
const Orders = lazy(() => import("./pages/orders/Orders.js"));
const Payments = lazy(() => import("./pages/payments/Payments.jsx"));
const SellerGallery = lazy(() => import("./pages/seller-gallery/SellerGallery.js"));
const AddProducts = lazy(() => import("./pages/add-product/AddProducts.jsx"));
const SellerProfile = lazy(() => import("./pages/seller-profile/SellerProfile.js"));
const AddImages = lazy(() => import("./pages/add-images/AddImages.jsx"));


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
  // dashboard
  {
    path: "/dashboard",
    exact: true,
    name: "dashboard",
    component: Dashboard,
  },

  // product
  {
    path: "/products",
    exact: true,
    name: "products",
    component: Products,
  },

  //orders
  {
    path: "/orders",
    exact: true,
    name: "orders",
    component: Orders,
  },

  //payments
  {
    path: "/payments",
    exact: true,
    name: "payments",
    component: Payments,
  },

  //seller gallery
  {
    path: "/seller-gallery",
    exact: true,
    name: "seller-gallery",
    component: SellerGallery,
  },

  //add products
  {
    path: "/add-products",
    exact: true,
    name: "add-products",
    component: AddProducts,
  },

  //seller profile
  {
    path: "/seller-profile",
    exact: true,
    name: "seller-profile",
    component: SellerProfile,
  },

  //add images
  {
    path: "/add-images",
    exact: true,
    name: "add-images",
    component: AddImages,
  },

];
