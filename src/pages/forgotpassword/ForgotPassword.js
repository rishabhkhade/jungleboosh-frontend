import React from "react";
import "./ForgotPassword.scss";
import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import Input from "../../component/inputs/Input";
const ForgotPassword = () => {
  return (
    <>
      <div class="forgot_password parent">
        <div class="forgot_password_cont cont">
          <div class="panel_card">
            <div class="back_button">
              <Link class="butoon_bc">
                <span><LuArrowLeft /></span>
                <p>Back</p>
              </Link>
            </div>
            <div class="content">
                <h4>
                Forgot login password
                </h4>
                <p>
                Please enter your registered email id
                </p>
            </div>
            <form action="" className="emailForm" >
                <Input  label="Email Id" />
                <button class="btn otp_btn">
                       Send Otp
                </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
