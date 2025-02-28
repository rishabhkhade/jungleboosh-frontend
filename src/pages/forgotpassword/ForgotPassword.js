import React, { useEffect, useLayoutEffect, useState } from "react";
import "./ForgotPassword.scss";
import { Link, useNavigate } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import Input from "../../component/inputs/Input";
import { sellerApi } from "../../utils/Api";
import UseForm from "../../UseForm";
import OtpInput from "react-otp-input";
import axios from "axios";
import ValidateFp from "../../validate/ValidateForgotPassword";

const ForgotPassword = () => {
  const [otpField, setOtpField] = useState(
    JSON.parse(localStorage.getItem("otpField")) || false
  );

  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const otpsend = async () => {
    try {
      const response = await sellerApi.post(
        "api/seller/forgetPasswordSendOtp",
        values,
        {
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        console.log(response);
        setOtpField(true);
        localStorage.setItem("otpField", JSON.stringify(true));
        localStorage.setItem("email", values.email);
        localStorage.setItem("id", response.data.data.id);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrors({
          email: "Email is incorrect",
        });
      }
    }
  };

  const otpVerify = async (e) => {
    try {
      e.preventDefault();
      const response = await sellerApi.post("api/seller/otpVerification", {
        sellerId: Number(localStorage.getItem("id")),
        otp: otp,
      });
      if (response.status === 200) {
        localStorage.removeItem("otpField", JSON.stringify(true));
        localStorage.removeItem("email", values.email);
        navigate("/ChangePassword");
      }
    } catch (error) {
      if (error.response.data.message === "Incorrect OTP") {
        alert("otp incorrect");
      }
    }
  };

  const formObj = { email: "" };

  useEffect(() => {
    if (otpField) {
      setValues({
        email: localStorage.getItem("email"),
      });
    }
  }, [otpField]);

  const { handleChange, handleSubmit, values, setValues, errors, setErrors } =
    UseForm(formObj, ValidateFp, otpsend);

  return (
    <>
      <div className="forgot_password parent">
        <div className="forgot_password_cont cont">
          <div className="panel_card">
            <div className="back_button">
              <Link className="butoon_bc" to="/login">
                <span>
                  <LuArrowLeft />
                </span>
                <p>Back</p>
              </Link>
            </div>
            <div className="content">
              <h4>Forgot login password</h4>
              <p>Please enter your registered email id</p>
            </div>
            <form
              className="emailForm"
              onSubmit={otpField ? otpVerify : handleSubmit}
            >
              <div class="form-row">
                <Input
                  name="email"
                  value={values.email}
                  label="Email Id"
                  onChange={handleChange}
                />
                {errors.email && (
                  <small className="text-warning">{errors.email}</small>
                )}
              </div>

              {otpField && (
                <div className="form-row">
                  <label for=""> Enter Otp </label>
                  <OtpInput
                    numInputs={6}
                    value={otp}
                    onChange={setOtp}
                    renderSeparator={null}
                    renderInput={(props) => <input {...props} />}
                    inputStyle={{
                      width: "40px",
                      height: "40px",
                      fontSize: "20px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      textAlign: "center",
                      margin: "5px",
                    }}
                  />
                </div>
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
