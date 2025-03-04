import React from "react";
import "./Header.scss";
import logo_header from "../../assets/header/Untitled design.png";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";
import { sellerApi } from "../../utils/Api";

function Header() {
  return (
    <>
      <div className="parent header-parent">
        <div className="cont header-container">
          {/* <div className='logo'><img src={logo_header} /></div> */}
          <div className="logo">
            <h2 style={{ color: "var(--accent)" }}>lorem lipsum</h2>
          </div>
          <div className="links">
            <Link to="/sell-online" className="sell-online">
              Sell Online
            </Link>
            <Link to="/login" className="border-btn">
              Login
            </Link>
            <Link className="btn">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
