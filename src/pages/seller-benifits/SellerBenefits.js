import React from "react";
import "./SellerBenefits.scss";
import HeadingTag from "../../component/heading-tag/HeadingTag";
import earn_more from "../../assets/seller-benefits/salary.png";
import { GoCheck } from "react-icons/go";

function SellerBenefits() {
  //earn
  const earn = [
    {
      img: earn_more,
      heading: "Transparent Commission Structure",
      des: "Get a clear breakdown of commission rates for each sale, earn       more with higher sales volume, and enjoy complete transparency with no surprise deductions.",
      no: "01",
    },
    {
      img: earn_more,
      heading: "Transparent Commission Structure",
      des: "Get a clear breakdown of commission rates for each sale, earn       more with higher sales volume, and enjoy complete transparency with no surprise deductions.",
      no: "02",
    },
    {
      img: earn_more,
      heading: "Transparent Commission Structure",
      des: "Get a clear breakdown of commission rates for each sale, earn       more with higher sales volume, and enjoy complete transparency with no surprise deductions.",
      no: "03",
    },
  ];

  //logistics
  const logistics = [
    {
      icons: <GoCheck />,
      heading: "Fast & Reliable Delivery",
      content:
        " We partner with trusted carriers for safe and on-time                  shipments.",
    },
    {
      icons: <GoCheck />,
      heading: "Real-Time Tracking",
      content: "Get live updates on your orders with seamless tracking.",
    },
    {
      icons: <GoCheck />,
      heading: "Secure Packaging",
      content:
        "Every product is packed with care to ensure it reaches you in perfect condition.",
    },
    {
      icons: <GoCheck />,
      heading: "Multiple Shipping Options",
      content: "Choose from express, standard, and eco-friendly delivery.",
    },
    {
      icons: <GoCheck />,
      heading: "Easy Returns & Replacements",
      content: "Hassle-free returns with quick processing.",
    },
  ];

  //marketing  & promotion
  const marketing = [
    {
      icons: <GoCheck />,
      heading: "Advertise on Our Platform",
    },
    {
      icons: <GoCheck />,
      heading: "Offer Discounts & Exclusive Deals",
    },
    {
      icons: <GoCheck />,
      heading: "Leverage Our Social Media Reach",
    },
  ];

  return (
    <>
      {/* earning and fees */}
      <div class="parent earn-and-fees-parent">
        <div class="cont earn-and-fees-cont ">
          <HeadingTag text="Earnings & Fees Overview" />
          <h2>Understand Your Earnings & Fees with Transparency</h2>
          <div class="earn-process">
            {earn.map((item, index) => (
              <div class="earn-process-card">
                <img src={item.img} alt="" />
                <div class="earn-no">{item.no}</div>
                <h3>{item.heading}</h3>
                <p>{item.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* logistics */}
      <div class="parent logistics-parent bg-img-cover">
        <div class="cont logistics-cont">
          <div class="left-logistics bg-img-cover"></div>
          <div class="right-logistics">
            <HeadingTag text="Logistics & Shipping" />
            <h2>Seamless, Fast & Secure Shipping Solutions</h2>
            <p>
              Efficient logistics and shipping are the backbone of a successful
              eCommerce business. We ensure smooth order fulfillment, secure
              packaging, and timely deliveries for a hassle-free shopping
              experience.
            </p>
            {logistics.map((item, index) => (
              <div class="logistics-points">
                <span>{item.icons}</span>
                <div>
                  <h3>{item.heading}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* marketing and promotion */}
      <div class="parent marketing-promotion-parent">
        <div class="cont marketing-promotion-cont">
          <div class="left-marketing-promotion bg-img-cover"></div>
          <div class="right-marketing-promotion">
            <HeadingTag text="Marketing & Promotion Tools" />
            <h2>Powerful Tools to Boost Your Sales</h2>
            <p>
              Expand your reach and drive more sales with our powerful marketing
              and promotion tools. We provide multiple ways to help your
              business grow and attract more customers.
            </p>
            {marketing.map((item, index) => (
              <div class="marketing-promotion">
                <span>{item.icons}</span>
                <div>
                  <h3>{item.heading}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerBenefits;
