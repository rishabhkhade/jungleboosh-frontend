import { lazy } from "react";


// dashboard
const dashboard    = lazy(()=> import("./pages/sellerHome/SellerHome") );
// login 
const login        = lazy(()=>import("./pages/login/Login"))



// rotuing
export const routes = [
    // authentication
    {
        path:"/", exact:true, name:"dashboard", component:dashboard
    },
    {
        path:"/login", exact:true, name:"login", component:login
    }
]