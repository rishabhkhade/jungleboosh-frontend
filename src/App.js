import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Suspense, useContext, useEffect } from "react";
import "./App.scss";
import { routes } from "./routes";
import ContextProvider, { UserContext } from "./Context";
import Sidebar from "./component/sidebar/Sidebar";
import DashHeader from "./component/dashHeader/DashHeader";

function App() {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const restrictedPaths = [
    "/",
    "/login",
    "/forgotpassword",
    "/register",
    "/ChangePassword",
  ];

  useEffect(() => {
    // Check if user just logged in
    if (user && localStorage.getItem("firstLogin") === "true") {
      navigate("/dashboard"); // Redirect to dashboard
      localStorage.setItem("firstLogin", "false"); // Reset flag
    }
  }, [user, navigate]);
  return (
    <div className="App">
       {user && !restrictedPaths.includes(location.pathname) && <DashHeader />}
      {user && !restrictedPaths.includes(location.pathname) && <Sidebar />}
     

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((item, index) =>
            item.component ? (
              <Route
                key={index}
                path={item.path}
                exact={item.exact}
                name={item.name}
                element={
                  item.path === "/" && user ? (
                    <Navigate to="/dashboard" />
                  ) : (
                    <item.component />
                  )
                }
              />
            ) : null
          )}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
