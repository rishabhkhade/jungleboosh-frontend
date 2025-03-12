import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { Suspense, useContext, useEffect } from "react";
import "./App.scss";
import { routes } from "./routes";
import { UserContext } from "./Context";
import Sidebar from "./component/sidebar/Sidebar";
import DashHeader from "./component/dashHeader/DashHeader";

function App() {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (user && localStorage.getItem("firstLogin") === "true") {
      navigate("/dashboard"); // Redirect to dashboard
      localStorage.removeItem("firstLogin"); // Remove flag after redirection
    }
  }, [user, navigate]);

  const restrictedPaths = [
    "/",
    "/login",
    "/forgotpassword",
    "/register",
    "/ChangePassword",
    "/*",
    "/seller-benefits",
    "/help-support",
  ];

  // useEffect(() => {
  //   if (!user && !restrictedPaths.includes(window.location.pathname)) {
  //     navigate("/404", { replace: true }); // Redirect to 404 if not logged in
  //   }
  // }, [user, navigate]);

  return (
    <div className="App">
      {user && !restrictedPaths.includes(window.location.pathname) && (
        <DashHeader />
      )}
      {user && !restrictedPaths.includes(window.location.pathname) && (
        <Sidebar />
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((item, index) =>
            item.component ? (
              <Route
                key={index}
                path={item.path}
                exact={item.exact}
                name={item.name}
                // element={
                //   restrictedPaths.includes(item.path) || user ? (
                //     <item.component />
                //   ) : (
                //     <Navigate to="/404" replace />
                //   )
                // }

                element={<item.component/>}
              />
            ) : null
          )}
          {/* Show 404 if no match */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
