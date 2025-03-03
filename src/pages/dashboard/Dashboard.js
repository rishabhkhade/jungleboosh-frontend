import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context";
import "./Dashboard.scss";
import Card from "../../component/card/Card";
const Dashboard = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, "", window.location.href);
    };
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      if (!localStorage.getItem("seller_Data")) {
        setUser(null); // Update context
        navigate("/login", { replace: true });
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [navigate, setUser]);

  return (
    <Card>
      <div className="dashboard_parent parent">
        <h2>i am dashboard</h2>
      </div>
    </Card>
  );
};

export default Dashboard;
