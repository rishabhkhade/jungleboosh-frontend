import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context";
import "./Dashboard.scss";
import Card from "../../component/card/Card";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";
import { HiDotsVertical } from "react-icons/hi";
import Header_label from "../../component/header_label/Header_label";
import { FaArrowUp } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import BarCharts from "../../component/barcharts/BarCharts";
import { Progress } from "antd";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    const sellerData = localStorage.getItem("seller_Data");
    
    // If no seller data, redirect to home (or login)
    if (!sellerData) {
      navigate("/", { replace: true }); // Redirect to Home instead of Login
    }
  }, [navigate]);



  
  const dashTopBarData = [
    {
      icon: <AiOutlineShoppingCart />,
      title: "Total Orders",
      number: "400",
      top_bar_icon: <GoPlus />,
      percentage: "20",
      lastMonth: "last month",
    },
    {
      icon: <GrMoney />,
      title: "Total Sell",
      number: "₹42.5L",
      top_bar_icon: "",
      percentage: "",
      lastMonth: "",
    },
    {
      icon: <FaTag />,
      title: "Total Products",
      number: "452",
      top_bar_icon: <FaArrowUp />,
      percentage: "20",
      lastMonth: "last month",
    },
  ];

  const data = [
    {
      name: "Jan",
      amount: 50000,
    },
    {
      name: "Feb",
      amount: 150000,
    },
    {
      name: "Mar",
      amount: 300000,
    },
    {
      name: "Apr",
      amount: 25000,
    },
    {
      name: "May",
      amount: 500000,
    },
  ];

  const statusData = [
    {
      title: "Pending Orders",
      value: 100,
      initalValue: 400,
    },
    {
      title: "Shipped Orders",
      value: 180,
      initalValue: 400,
    },
    {
      title: "Delievered Orders",
      value: 60,
      initalValue: 400,
    },
  ];

  return (
    <Card>
      <Header_label />
      <div className="dashboard_parent parent">
        <div className="overlay"></div>
        <div class="dashboard_cont cont">
          <>
            {dashTopBarData.map((item, index) => (
              <div class="dash_data">
                <div class="top_bar">
                  <div class="left_bar">
                    <div class="icon">{item.icon}</div>
                    <p> {item.title} </p>
                  </div>
                  <div class="right_bar">
                    <div class="icon">
                      <HiDotsVertical />
                    </div>
                    <p>View Details</p>
                  </div>
                </div>
                <div class="bottom_bar">
                  <h2> {item.number} </h2>
                  <p>
                    <span> {item.top_bar_icon || ""} </span>
                    {item.percentage || ""}
                    <span> {item.lastMonth || ""} </span>
                  </p>
                </div>
              </div>
            ))}
          </>

          <div class="dash_data">
            <div class="top_bar">
              <p>Payment Summary</p>
            </div>
            <div class="bottom_bar">
              <BarCharts data={data} />
            </div>
          </div>
          <div class="dash_data">
            <div class="top_bar">
              <p>Orders Summary</p>
            </div>
            <div class="bottom_bar">
              <BarCharts data={data} />
            </div>
          </div>
          <div class="dash_data">
            {statusData.map((item, index) => (
              <div className="data" key={index}>
                <p>{item.title}</p>
                <Progress
                  percent={(item.value / item.initalValue) * 100}
                  strokeColor="var(--accent)"
                  showInfo={false}
                />
                <p>
                  {item.value} / {item.initalValue} orders
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Dashboard;
