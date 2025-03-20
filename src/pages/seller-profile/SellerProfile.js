import React from 'react'
import './SellerProfile.scss'
import Card from '../../component/card/Card'
import Header_label from '../../component/header_label/Header_label'
import { RiEdit2Line } from "react-icons/ri";
import seller_img from "../../assets/testimonial/NewProject.webp"

function SellerProfile() {
    return (
        <>
            <Card>
                <Header_label />
                <div class="seller-profile-parent parent">
                    <div class="seller-profile-cont cont">
                        <div class="seller-profile">
                            <div class="left-seller-profile">
                                <img src={seller_img} alt="" />
                                <div class="name-profile-area">
                                    <h4>Seller Name</h4>
                                    <h5>Pune, Maharashtra</h5>
                                </div>
                            </div>
                            <div class="right-seller-profile">
                                <span>Edit</span>
                                <span><RiEdit2Line /></span>
                            </div>
                        </div>


                        <div class="personal-profile">
                            <div class="personal-profile-main">
                                <div class="top-personal-profile">
                                    <h4>Personal Information</h4>
                                    <div class="right-seller-profile">
                                        <span>Edit</span>
                                        <span><RiEdit2Line /></span>
                                    </div>
                                </div>
                                <div class="bottom-personal-profile">
                                    <form action="">
                                        <div class="form-row">
                                            <label for="">
                                                <p>First Name</p>
                                                <input type="text" />
                                            </label>

                                            <label for="">
                                                <p>First Name</p>
                                                <input type="text" />
                                            </label>
                                        </div>

                                        <div class="form-row">
                                            <label for="">
                                                <p>Email</p>
                                                <input type="text" />
                                            </label>

                                            <label for="">
                                                <p>Phone</p>
                                                <input type="text" />
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>


                        <div class="business-profile">
                        <div class="business-profile-main">
                                <div class="top-business-profile">
                                    <h4>Business Information</h4>
                                    <div class="right-seller-profile">
                                        <span>Edit</span>
                                        <span><RiEdit2Line /></span>
                                    </div>
                                </div>
                                <div class="bottom-business-profile">
                                    <form action="">
                                        <div class="form-row">
                                            <label for="">
                                                <p>First Name</p>
                                                <input type="text"  />
                                            </label>

                                            <label for="">
                                                <p>First Name</p>
                                                <input type="text" />
                                            </label>
                                        </div>

                                        <div class="form-row">
                                            <label for="">
                                                <p>Email</p>
                                                <input type="text" />
                                            </label>

                                            <label for="">
                                                <p>Phone</p>
                                                <input type="text" />
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default SellerProfile
