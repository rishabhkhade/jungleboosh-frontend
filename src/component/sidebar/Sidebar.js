import React, { useContext } from "react";
import "./Sidebar.scss";

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { UserContext } from "../../Context";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { LuTag } from "react-icons/lu";
import { GrMoney } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { GrGallery } from "react-icons/gr";

const Sidebar = () => {
  const { sidebar, setSidebar } = useContext(UserContext);
  const navItems = [
    {
      icon: <AiOutlineHome />,
      navItem: "Home",
      navLink: "/dashboard",
    },
    {
      icon: <FiPlus />,
      navItem: "Add Product",
      navLink: "/dashboard",
    },
    {
      icon: <LuTag />,
      navItem: "Product List",
      navLink: "/dashboard",
    },
    {
      icon: <GrMoney />,
      navItem: "Total Sell",
      navLink: "/dashboard",
    },
    {
      icon: <MdPayment />,
      navItem: "Payments",
      navLink: "/dashboard",
    },
    {
      icon: <GrGallery />,
      navItem: "Gallery",
      navLink: "/dashboard",
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
              <Link className="linkitem" to={item.navLink}  key={index} >
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
