import React from "react";
import "./SellerHome.scss";
import { AiOutlineSafety } from "react-icons/ai";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import image_hero from "../../assets/hero_section/hero-img.webp";
import registration from "../../assets/why_choose_us/registration.svg";
import HeadingTag from "../../component/heading-tag/HeadingTag";
import { LuCheckCheck } from "react-icons/lu";
import testimonial_img1 from "../../assets/testimonial/NewProject.webp";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import step_img1 from "../../assets/steps/2114.jpg";
import { RiMegaphoneLine } from "react-icons/ri";
import earn_more from "../../assets/seller-benefits/salary.png"


function SellerHome(props) {
  //why choose us data
  const w_c_data = [
    {
      image: registration,
      name: "No Registration Fee",
      des: "Registering as a JungleBoosh seller is free - no cost of creating your account or getting your products listed.",
    },
    {
      image: registration,
      name: "No Registration Fee",
      des: "Registering as a JungleBoosh seller is free - no cost of creating your account or getting your products listed.",
    },
    {
      image: registration,
      name: "No Registration Fee",
      des: "Registering as a JungleBoosh seller is free - no cost of creating your account or getting your products listed.",
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
      img: earn_more
    },
  ]

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


      {/* seller benefits */}
      <div className="parent seller-benefits-parent">
        <div className="cont seller-benefits-container">
          <div className="seller-benefits-heading">
            <HeadingTag text="Seller Benefits" />
          </div>
          <div className="seller-benefits-bottom">
            <div class="seller-benefits-left">
              {
                seller_benefits_data.map((item, index) => (
                  <div class="seller-benefits-box">
                    <img src={item.img} alt="" />
                    <h3>{item.heading}</h3>
                    <p>{item.desc}</p>

                  </div>
                ))
              }

              <div class="seller-benefits-box">
                <img src={earn_more} alt="" />
                <h3>Earn More</h3>
                <p>All the Lorem Ipsum generators on the Inter tend to chunks as true generator.</p>

              </div>

              <div class="seller-benefits-box">
                <img src={earn_more} alt="" />
                <h3>Earn More</h3>
                <p>All the Lorem Ipsum generators on the Inter tend to chunks as true generator.</p>

              </div>
              <div class="seller-benefits-box">
                <img src={earn_more} alt="" />
                <h3>Earn More</h3>
                <p>All the Lorem Ipsum generators on the Inter tend to chunks as true generator.</p>

              </div>
            </div>
            <div class="seller-benefits-right">
              <div class="seller_benefit_img">
                <h3>We help our seller achieve their goals</h3>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* why choose us */}

      <div className="parent why-choose-parent">
        <div className="cont why-choose-container">
          <div className="w-c-heading">
            <HeadingTag text="Why Choose us" />
          </div>
          <div className="w-c-bottom">
            {w_c_data.map((item, index) => (
              <div className="why-choose-box">
                <>
                  <div className="w-c-icon">
                    <img src={item.image} alt="No Registration Fee" />
                  </div>
                  <div className="w-c-main-content">
                    <h3>{item.name}</h3>
                    <p>{item.des}</p>
                  </div>
                </>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* testimonial */}
      <div className="parent testimonial-parent">
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
          <div class="heading-business-online">
            <HeadingTag text="How to Grow Your Online Business " />
          </div>
          <div class="business-online-container-bottom">
            <div class="business-online-left">
              <h3>Lorem ipsum dolor dolor sit sit amet.</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem provident cupiditate blanditiis. Ratione, iure rerum.
                Maiores corporis consequatur eum ad. Minus eum natus corrupti
                placeat doloremque accusamus consequuntur illum reiciendis.
              </p>
              <div class="btn">Submit</div>
            </div>
            <div class="business-online-right">
              <div class="business-online-box">
                <span>
                  <RiMegaphoneLine />
                </span>
                <h3>Advertisements</h3>
                <p>
                  You can promote your product catalog to reach more customers
                  and increase your sales using Meesho Ads. Currently, not
                  available for sellers who don't have a Regular GSTIN.
                </p>
              </div>

              <div class="business-online-box">
                <span>
                  <RiMegaphoneLine />
                </span>
                <h3>Advertisements</h3>
                <p>
                  You can promote your product catalog to reach more customers
                  and increase your sales using Meesho Ads. Currently, not
                  available for sellers who don't have a Regular GSTIN.
                </p>
              </div>

              <div class="business-online-box">
                <span>
                  <RiMegaphoneLine />
                </span>
                <h3>Advertisements</h3>
                <p>
                  You can promote your product catalog to reach more customers
                  and increase your sales using Meesho Ads. Currently, not
                  available for sellers who don't have a Regular GSTIN.
                </p>
              </div>

              <div class="business-online-box">
                <span>
                  <RiMegaphoneLine />
                </span>
                <h3>Advertisements</h3>
                <p>
                  You can promote your product catalog to reach more customers
                  and increase your sales using Meesho Ads. Currently, not
                  available for sellers who don't have a Regular GSTIN.
                </p>
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
