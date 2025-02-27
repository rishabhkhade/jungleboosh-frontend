import React from "react";
import "./ForgotPassword.scss";
import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
