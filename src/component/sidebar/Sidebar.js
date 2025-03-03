import React, { useContext } from "react";
import "./Sidebar.scss";

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { UserContext } from "../../Context";
import { HiMiniHome } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { sidebar, setSidebar } = useContext(UserContext);
  const navItems = [
    {
      icon: <HiMiniHome />,
      navItem: "Home",
      navLink: "/dashboard",
    },
    {
      icon: <HiMiniHome />,
      navItem: "Home",
      navLink: "/dashboard",
    },
    {
      icon: <HiMiniHome />,
      navItem: "Home",
      navLink: "/dashboard",
    },
    {
      icon: <HiMiniHome />,
      navItem: "Home",
      navLink: "/dashboard",
    },
    {
      icon: <HiMiniHome />,
      navItem: "Home",
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
