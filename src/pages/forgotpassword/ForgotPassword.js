import React, { useState } from "react";
import "./ForgotPassword.scss";
import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import Input from "../../component/inputs/Input";
import { sellerApi } from "../../utils/Api";
import UseForm from "../../UseForm";

import axios from "axios";
import ValidateFp from "../../validate/ValidateForgotPassword";
const ForgotPassword = () => {


  const otpsend = async () => {
    try {
      const response = await sellerApi.post("api/seller/forgetPasswordSendOtp", values, {
        withCredentials: true,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const formObj = { email: "" };

  const { handleChange, handleSubmit, values, errors, setErrors } = UseForm(
    formObj,
    ValidateFp,
    otpsend
  );

  return (
    <>
      <div class="forgot_password parent">
        <div class="forgot_password_cont cont">
          <div class="panel_card">
            <div class="back_button">
              <Link class="butoon_bc"  to="/login" >
                <span>
                  <LuArrowLeft />
                </span>
                <p>Back</p>
              </Link>
            </div>
            <div class="content">
              <h4>Forgot login password</h4>
              <p>Please enter your registered email id</p>
            </div>
            <form className="emailForm" onSubmit={handleSubmit}>
              <Input
                name="email"
                value={values.email}
                label="Email Id"
                onChange={handleChange}
              />
              {errors.email && (
                <small className="text-warning">{errors.email}</small>
              )}

              <input value="Send Otp" type="submit" className="btn otp_btn" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
