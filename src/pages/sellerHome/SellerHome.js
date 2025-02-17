import React from 'react'
import './SellerHome.scss'
import { AiOutlineSafety } from "react-icons/ai";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";

function SellerHome() {

    const data = [
        {
            icons: <AiOutlineSafety />,
            name: "Safety"
        },
        {
            icons: <AiOutlineSafety />,
            name: "Efficient"
        },
        {
            icons: <MdOutlinePrecisionManufacturing />,
            name: "Precision"
        },
        {
            icons: <AiOutlineSafety />,
            name: "Innovation"
        },
    ]

    const step = [
        "Register", "Listing products", "Accepting orders", "Tracking orders", "Manage stocks", "Payments on time"
    ]

    return (
        <>
            <div className="parent seller-home-parent">
                <div className="container seller-home-container">
                    <div className="seller-home-left">
                        left side
                    </div>
                    <div className="seller-home-right">
                        right side
                    </div>
                </div>
            </div>

            {/* second section */}

            <div className="parent second-section-parent">
                <div className="container second-section-container">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quas quaerat et veritatis ex labore, vero facilis illum eligendi accusamus.</p>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <div className='gif-second-cont'></div>
                    <div className="btn">Register Now</div>
                </div>
            </div>

            {/* video gif */}

            <div className="parent video-gif-parent">
                <p>video gif goes here</p>
            </div>


            {/* steps */}
            <div className="parent steps-section-parent">
                <div className="container steps-section-container">
                    <h3>Steps to follow</h3>
                    <div className="steps">
                        {
                            step.map((item, index) => (
                                <div className="step-box">{item}</div>
                            ))
                        }
                    </div>

                </div>
            </div>


            {/* about us */}
            <div className="parent about-parent">
                <div className="container about-container">

                    <h3>About Us</h3>
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quisquam, deserunt fugiat architecto.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste illum quos ullam debitis placeat quisquam, temporibus omnis soluta vitae tempore quam, explicabo itaque repellat.</p>

                </div>
            </div>

            {/* four options */}

            <div className="parent four-option-parent">
                <div className="container four-option-container">
                    <div className="wrapper-icon-heading">
                        {data.map((item, index) => (
                            <>
                                <div className="icon-heading">
                                    <span>{item.icons}</span>
                                    <h4>{item.name}</h4>
                                </div>
                            </>
                        ))}
                    </div>


                </div>
            </div>

            {/* vission mission */}
            <div className="parent vision-mision-parent">
                <div className="container vision-mision-container">
                    <div className="left-v-m">
                        <div className="v-m-heading">
                            <div className="v-m-logo"></div>
                            <h3>Vision</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum reiciendis quam ducimus, quae commodi! Commodi rerum fugiat temporibus consectetur et. Ratione ut architecto perferendis  Hic eum reiciendis quam ducimus, quae commodi! Commodi rerum fugiat temporibus consectetur et. Ratione ut architecto perferendis?</p>
                    </div>
                    <div className="v-m-line"></div>
                    <div className="right-v-m">
                        <div className="v-m-heading">
                            <div className="v-m-logo"></div>
                            <h3>Mision</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum reiciendis quam ducimus, quae commodi! Commodi rerum fugiat temporibus consectetur et. Ratione ut architecto perferendis  Hic eum reiciendis quam ducimus, quae commodi! Commodi rerum fugiat temporibus consectetur et. Ratione ut architecto perferendis?</p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default SellerHome
