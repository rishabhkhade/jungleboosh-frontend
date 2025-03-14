import React from "react";
import "./DashHeader.scss";
import Card from "../card/Card";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { sellerApi } from "../../utils/Api";
const DashHeader = () => {
  const navigate = useNavigate();const logout = async () => {
    try {
      const confirmLogout = window.confirm("Are you sure you want to log out?");
      if (!confirmLogout) return;
  
      // Call API to logout (backend will clear cookies)
      const response = await sellerApi.post("api/seller/logout", {}, { withCredentials: true });
  
      if (response.status === 200) {
        // Remove authentication details
        localStorage.removeItem("seller_Data");
        localStorage.removeItem("firstLogin");
  
        // Navigate to login and replace history
        navigate("/login", { replace: true });
  
        // Prevent navigating back to dashboard
        setTimeout(() => {
          window.history.replaceState(null, "", "/login");
        }, 100);
      }
    } catch (error) {
      console.error("Logout error:", error);
      if (error.response?.status === 401) {
        console.log("Already logged out. Redirecting...");
        navigate("/login", { replace: true });
      }
    }
  };
  
  return (
    <>
      <div class="header_parent">
        <div class="left">
          <h2>lorem lipsum</h2>
        </div>
        <div class="right">
          <Link>Dashboard</Link>
          <Link>Add Products</Link>
          <Link>Orders</Link>
          <div class="dropdown">
            <div class="label">
              <span>
                <FaRegUser />
              </span>
              Swapnil Dudka
            </div>
            <div class="options">
              <Link>My Profile</Link>
              <div className="logout" onClick={logout}>
                logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashHeader;
