import React from "react";
import "./Header_label.scss";
import { useLocation } from "react-router-dom";
const Header_label = () => {
  const location = useLocation();


  return (
    <>
      <div class="header_label parent">
        
        <div class="hader_label_cont cont">
           <p>{location.pathname.replace("/", "")}</p>
        </div>
      </div>
    </>
  );
};

export default Header_label;
