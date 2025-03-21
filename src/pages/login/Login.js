import React, { useContext, useState } from "react";
import "./Login.scss";

import Input from "../../component/inputs/Input";
import { Link, useNavigate } from "react-router-dom";
import { sellerApi } from "../../utils/Api";
import UseForm from "../../UseForm";
import ValidateLogin from "../../validate/ValidateLogin";
import { UserContext } from "../../Context";
import Loader from "../Loader/Loader";

function Login() {
  const { setUser } = useContext(UserContext);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const login = async () => {
    try {
      setLoader(true);
  
      const response = await sellerApi.post("api/seller/login", values, {
        withCredentials: true, // ✅ Ensures cookies are sent & received
      });
  
      if (response.status === 200) {
      
        localStorage.setItem("seller_Data", JSON.stringify(response.data.data));
  
        setUser(response.data.data);
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      if (error.response?.status === 400) {
        setErrors({
          email: "email is incorrect",
        });
      }
      if (error.response?.data?.message === "Incorrect email or password") {
        setErrors({
          password: "password is incorrect",
        });
      }
    } finally {
      setLoader(false);
    }
  };
  

  const formObj = { email: "", password: "" };

  const { handleChange, handleSubmit, values, errors, setErrors } = UseForm(
    formObj,
    ValidateLogin,
    login
  );

  return (
    <>
      {loader && <Loader />}
      <div class="login_page parent">
        <div class="login_page_cont cont">
          <div class="left_login"></div>
          <div class="right_login">
            <h3>lorem lipsum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, eligendi!
            </p>
            <form onSubmit={handleSubmit}>
              <div class="form-row">
                <Input
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && (
                  <small className="text-warning">{errors.email}</small>
                )}
              </div>
              <div class="form-row">
                <Input
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  password={true}
                />
                {errors.password && (
                  <small className="text-warning">{errors.password}</small>
                )}
              </div>
              <div class="question_tags">
                <Link className="link" to="/forgotpassword">
                  Forgot Password ?
                </Link>
                <Link to="/register" className="link link2">
                  Register Our Business
                </Link>
              </div>
              <input class="btn" value="Log in" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
