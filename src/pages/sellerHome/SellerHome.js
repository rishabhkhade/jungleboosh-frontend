import React, { useState } from "react";
import "./SellerHome.scss";
import image_hero from "../../assets/hero_section/hero-img.webp";
import HeadingTag from "../../component/heading-tag/HeadingTag";
import { LuCheckCheck } from "react-icons/lu";
import testimonial_img1 from "../../assets/testimonial/NewProject.webp";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import step_img1 from "../../assets/steps/2114.jpg";
import { RiMegaphoneLine } from "react-icons/ri";
import earn_more from "../../assets/seller-benefits/salary.png";
import { GoCheck } from "react-icons/go";
import { LiaRecycleSolid } from "react-icons/lia";
import product_listing from "../../assets/online_business/6029494.webp";
import { MdArrowDownward } from "react-icons/md";

function SellerHome(props) {
  //why choose us data
  const w_c_data = [
    {
      logo: <GoCheck />,
      heading: "Social Impact",
      des: "We uplift rural communities by giving them a direct market",
    },
    {
      logo: <GoCheck />,
      heading: "Sustainable Growth",
      des: "Our platform decentralizes power, ensuring fair opportunities",
    },
    {
      logo: <GoCheck />,
      heading: "Low Commission, High Transparency",
      des: "Fair pricing with no hidden costs",
    },
    {
      logo: <GoCheck />,
      heading: "Marketing & Visibility",
      des: "Dedicated promotion for small sellers and artisans",
    },
    {
      logo: <GoCheck />,
      heading: "Logistics & Support",
      des: " Hassle-free shipping and fulfillment services",
    },
  ];

  // testimonial data
  const testimonial_data = [
    {
      icon: <LuCheckCheck />,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ipsa necessitatibus eligendi cum repellat iusto.",
      image: testimonial_img1,
      name: "Ram Kumar",
      city: "Maharastra, Pune",
    },
    {
      icon: <LuCheckCheck />,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ipsa necessitatibus eligendi cum repellat iusto.",
      image: testimonial_img1,
      name: "Ram Kumar",
      city: "Maharastra, Pune",
    },
    {
      icon: <LuCheckCheck />,
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ipsa necessitatibus eligendi cum repellat iusto.",
      image: testimonial_img1,
      name: "Ram Kumar",
      city: "Maharastra, Pune",
    },
  ];

  // steps data
  const steps_data = [
    {
      step_image: step_img1,
      step_name: "Heading",
      steps_contain:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet neque, officia voluptatem sed ullam itaque doloribus ut a, saepe earum repellat reiciendis minima. Libero, distinctio.",
    },
    {
      step_image: step_img1,
      step_name: "Heading",
      steps_contain:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet neque, officia voluptatem sed ullam itaque doloribus ut a, saepe earum repellat reiciendis minima. Libero, distinctio.",
    },
    {
      step_image: step_img1,
      step_name: "Heading",
      steps_contain:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet neque, officia voluptatem sed ullam itaque doloribus ut a, saepe earum repellat reiciendis minima. Libero, distinctio.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet neque, officia voluptatem sed ullam itaque doloribus ut a, saepe earum repellat reiciendis minima. Libero, distinctio.",
    },
  ];

  //seller benefits
  const seller_benefits_data = [
    {
      heading: "Earn More",
      desc: "All the Lorem Ipsum generators on the Inter tend to chunks as true generator.",
      img: earn_more,
    },
    {
      heading: "Earn More",
      desc: "All the Lorem Ipsum generators on the Inter tend to chunks as true generator.",
      img: earn_more,
    },
    {
      heading: "Earn More",
      desc: "All the Lorem Ipsum generators on the Inter tend to chunks as true generator.",
      img: earn_more,
    },
    {
      heading: "Earn More",
      desc: "All the Lorem Ipsum generators on the Inter tend to chunks as true generator.",
      img: earn_more,
    },
  ];

  return (
    <>
      {/* header */}
      <Header />
      {/* seller panel */}
      <div className="parent seller-home-parent ">
        <div className="cont seller-home-container">
          <div className="seller-home-left">
            <h1>
              Sell Smarter, <span>Grow Faster</span>
            </h1>
            <h1>
              Start Your Journey with <span>lorem!</span>
            </h1>
            <p>
              lorem – The Smartest Way to Sell Online and Scale Your Business!
            </p>
            <div class="btn">Start Selling</div>
          </div>
          {/* <div class="bullet"></div> */}
          <div className="seller-home-right bg-img-cover">
            <img src={image_hero} alt="hero image" />
          </div>
        </div>
      </div>

      {/* steps */}
      <div class="parent step-parent">
        <div class="heading-step-container cont">
          <HeadingTag text="Steps to get online " />
        </div>

        <div class="steps-design cont">
          {steps_data.map((item, index) => (
            <div class="cont step-container">
              <div class="step-left">
                <img src={item.step_image} alt="" />
              </div>
              <div class="step-right">
                <h3>{item.step_name}</h3>
                <p>{item.steps_contain}</p>
              </div>

              <div class="steps-circle">
                <span className="steps-inner-circle"></span>
              </div>
            </div>
          ))}

          <div class="steps-middle-line"></div>
        </div>
      </div>

      {/* why choose us */}

      <div class="w-c-commonparent">
        <div className="parent why-choose-parent">
          <div className="cont why-choose-container">
            <div class="w-c-left">
              <h2>Why Choose Us</h2>
              {w_c_data.map((item, index) => (
                <div class="w-c-points">
                  <div class="tick">{item.logo}</div>
                  <div class="content">
                    <h3>{item.heading} :</h3>
                    <p>{item.des}</p>
                  </div>
                </div>
              ))}
            </div>
            <div class="w-c-right"></div>
          </div>
          <div class="w-c-right-img bg-img-cover"></div>
        </div>

        <div class="parent elmentor-parent">
          <div class="cont elementor-cont">
            <div class="elementor-element">
              <span>
                <LiaRecycleSolid />
              </span>
              <h3>Marketing & Promotions</h3>
            </div>

            <div class="elementor-element">
              <span>
                <LiaRecycleSolid />
              </span>
              <h3>Analytics & Insights</h3>
            </div>

            <div class="elementor-element">
              <span>
                <LiaRecycleSolid />
              </span>
              <h3>Dedicated Seller Support</h3>
            </div>
          </div>
        </div>
      </div>

      {/* seller benefits */}
      <div className="parent seller-benefits-parent">
        <div className="cont seller-benefits-container">
          <div className="seller-benefits-heading">
            <HeadingTag text="Seller Benefits" />
          </div>
          <div className="seller-benefits-bottom">
            <div class="seller-benefits-left">
              {seller_benefits_data.map((item, index) => (
                <div class="seller-benefits-box">
                  <img src={item.img} alt="" />
                  <h3>{item.heading}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div class="seller-benefits-right">
              <div class="seller_benefit_img bg-img-cover"></div>
              <div class="contain">
                <h2>We help our seller achieve their goals!!</h2>
                <p>
                  We help our clients achieve their goals!! Trust Score 4.7
                  (Based on 1,200 reviews)
                </p>
                <div class="border-btn btn-seller">Register</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* popular product */}
      <div class="parent popular-product-parent">
        <div class="cont popular-product-cont">
          <div class="popular-header">
            <HeadingTag text="Popular Products" />
          </div>
          <div class="elements-popular-products">
            <h3>Handmade</h3>
            <h3>Organic </h3>
            <h3>Traditional</h3>
            <h3>Clothes</h3>
            <h3>Dairy </h3>
            <h3>Lorem </h3>
            <h3>Lorem </h3>
            <h3>Lorem </h3>
            <h3>Lorem </h3>
            <h3>Lorem </h3>
            <h3>Lorem </h3>
            <h3>Lorem </h3>
          </div>
        </div>
      </div>

      {/* testimonial */}
      <div className="parent testimonial-parent bg-img-cover">
        <div className="cont testimonial-container">
          <div className="testimonial-heading">
            <HeadingTag text="Testimonial" />
          </div>
          <div className="testimonial-bottom">
            {testimonial_data.map((item, index) => (
              <div className="testimonial-box">
                <div className="testimonial-top">
                  {" "}
                  <span>{item.icon}</span>
                  <p>{item.des}</p>
                </div>
                <div className="testimonial-bottom-img">
                  <div
                    className="testimonial-image bg-img-cover"
                    style={{ background: `url(${item.image})` }}
                  ></div>
                  <div className="name-designation">
                    <h4>{item.name}</h4>
                    <span>{item.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bring business online */}
      <div class="parent business-online-parent">
        <div class="cont business-online-container ">
          <div class="top-content">
            <h2>Scale Online Business</h2>
          </div>
          <div class="bottom-content">
            <div class="elementor-wrapper">
              <div class="no">01</div>
              <div class="elements">
                <img src={product_listing} alt="" />
                <div class="element-content">
                  <p>Best practices for product listings</p>
                </div>
              </div>
            </div>

            <div class="elementor-wrapper">
              <div class="no">02</div>
              <div class="elements">
                <img src={product_listing} alt="" />
                <div class="element-content">
                  <p>Pricing tips for better sales</p>
                </div>
              </div>
            </div>

            <div class="elementor-wrapper">
              <div class="no">03</div>
              <div class="elements">
                <img src={product_listing} alt="" />
                <div class="element-content">
                  <p>Leveraging The Jungle Boosh marketing tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}

      <Footer />
    </>
  );
}

export default SellerHome;
