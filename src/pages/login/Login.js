import React from "react";
import "./Login.scss";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { TextField } from "@mui/material";
import Input from "../../component/inputs/Input";

function Login() {
  return (
    <>
      <div class="login_page parent">
        <div class="login_page_cont cont">
          <div class="left_login"></div>
          <div class="right_login">
            <h3>Jungle Boosh</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, eligendi!
            </p>
            <form action="">
          <Input label="Username"  /> 
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
