import React from 'react'
import './SellerHome.scss'
import { AiOutlineSafety } from "react-icons/ai";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import image_hero from "../../assets/hero_section/hero-img.png";
import registration from "../../assets/why_choose_us/registration.svg"
import HeadingTag from '../../component/heading-tag/HeadingTag';
import { LuCheckCheck } from "react-icons/lu";
import testimonial_img1 from "../../assets/testimonial/NewProject.webp"

function SellerHome(props) {

    const w_c_data = [
        {
            image: registration,
            name: "No Registration Fee",
            des: "Registering as a JungleBoosh seller is free - no cost of creating your account or getting your products listed."
        },
        {
            image: registration,
            name: "No Registration Fee",
            des: "Registering as a JungleBoosh seller is free - no cost of creating your account or getting your products listed."
        },
        {
            image: registration,
            name: "No Registration Fee",
            des: "Registering as a JungleBoosh seller is free - no cost of creating your account or getting your products listed."
        },

    ]


    const testimonial_data = [
        {
            icon: <LuCheckCheck />,
            des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ipsa necessitatibus eligendi cum repellat iusto.",
            image: testimonial_img1,
            name: "Ram Kumar",
            city: "Maharastra, Pune"
        },
        {
            icon: <LuCheckCheck />,
            des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ipsa necessitatibus eligendi cum repellat iusto.",
            image: testimonial_img1,
            name: "Ram Kumar",
            city: "Maharastra, Pune"
        },
        {
            icon: <LuCheckCheck />,
            des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ipsa necessitatibus eligendi cum repellat iusto.",
            image: testimonial_img1,
            name: "Ram Kumar",
            city: "Maharastra, Pune"
        },

    ]



    return (
        <>
            <div className="parent seller-home-parent">
                <div className="container seller-home-container">
                    <div className="seller-home-left">
                        <h1>Sell Smarter, <span>Grow Faster</span> </h1>
                        <h1> Start Your Journey with <span>Jungleboosh!</span>
                        </h1>
                        <p>Jungleboosh – The Smartest Way to Sell Online and Scale Your Business!</p>
                    </div>
                    <div className="seller-home-right bg-img-cover">
                        <img src={image_hero} alt="hero image" />
                    </div>
                </div>
            </div>

            {/* why choose us */}

            <div className="parent why-choose-parent">
                <div className="container why-choose-container">
                    <div className="w-c-heading"><HeadingTag text="Why Choose us" /></div>
                    <div className="w-c-bottom">
                        {
                            w_c_data.map((item, index) => (
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
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* testimonial */}
            <div className="parent testimonial-parent">
                <div className="container testimonial-container">
                    <div className="testimonial-heading"><HeadingTag text="Testimonial" /></div>
                    <div className="testimonial-bottom">
                        {
                            testimonial_data.map((item, index) => (
                                <div className="testimonial-box">
                                    <div className="testimonial-top"> <span>{item.icon}</span>
                                        <p>{item.des}</p></div>
                                    <div className="testimonial-bottom-img">
                                        <div className="testimonial-image bg-img-cover" style={{ background: `url(${item.image})` }}>
                                        </div>
                                        <div className="name-designation">
                                            <h4>{item.name}</h4>
                                            <span>{item.city}</span>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellerHome
