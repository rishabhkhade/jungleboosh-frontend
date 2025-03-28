import React, { useContext } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context";

function Header() {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="parent header-parent">
        <div className="cont header-container">
          {/* <div className='logo'><img src={logo_header} /></div> */}
          <div className="logo">
            <h2 style={{ color: "var(--accent)" }}>lorem lipsum</h2>
          </div>

          <div className="links">

            <Link to="/seller-benefits" className="sell-online">
              Seller Benefits
            </Link>

            <Link to="/help-support" className="sell-online">
              Help & Support
            </Link>
            <Link to="/login" className="border-btn">
              Login
            </Link>
            <Link className="btn" to="/register">
              Register Your Business
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
