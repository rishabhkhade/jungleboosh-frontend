import React, { useContext } from "react";
import "./Sidebar.scss";

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { UserContext } from "../../Context";
import { AiOutlineHome } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { LuTag } from "react-icons/lu";
import { GrMoney } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { GrGallery } from "react-icons/gr";

const Sidebar = () => {
  const { sidebar, setSidebar } = useContext(UserContext);
  const location = useLocation();
  const navItems = [
    {
      icon: <AiOutlineHome />,
      navItem: "Home",
      navLink: "/dashboard",
    },
    {
      icon: <FiPlus />,
      navItem: "Add Product",
      navLink: "/addProduct",
    },
    {
      icon: <LuTag />,
      navItem: "Product List",
      navLink: "/productlist",
    },
    {
      icon: <GrMoney />,
      navItem: "Total Sell",
      navLink: "/totalsell",
    },
    {
      icon: <MdPayment />,
      navItem: "Payments",
      navLink: "/payments",
    },
    {
      icon: <GrGallery />,
      navItem: "Gallery",
      navLink: "/gallery",
    },
  ];
  return (
    <>
      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <div className="onclose" onClick={() => setSidebar(!sidebar)}>
          {!sidebar ? <FaArrowLeft /> : <FaArrowRight />}
        </div>

        <div className="sidebar_content">
          <div className="links">
            {navItems.map((item, index) => (
              <Link
              className={
                location.pathname === item.navLink ? "linkitem active" : "linkitem"
              }
                to={item.navLink}
                key={index}
              >
                <span>{item.icon}</span>
                <span className="linktext"> {item.navItem} </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
