import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context";
import "./Dashboard.scss";
import Card from "../../component/card/Card";
import Header_label from "../../component/header_label/Header_label";
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
      <Header_label />
      <div className="dashboard_parent parent">
        <div className="overlay"></div>
        <div class="dashboard_cont cont">
          <div class="dash_data"></div>
          <div class="dash_data"></div>
          <div class="dash_data"></div>
          <div class="dash_data"></div>
          <div class="dash_data"></div>
          <div class="dash_data"></div>
        </div>
      </div>
    </Card>
  );
};

export default Dashboard;
