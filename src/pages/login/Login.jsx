import React from 'react'
import './Login.scss'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

function Login() {
    return (
        <div>
            <div className="parent login-parent">
                <div className="container login-container">
                <div className="left-login">
                        <div className="top-login">
                            <h3>Login</h3>
                            <p>Welcome! please fill username and passwordto sign in into your account</p>
                        </div>

                        <div className="bottom-login">
                            <label>
                                <span>Email</span>
                                <input type="text" placeholder='Email' />
                            </label>
                            <label>
                                <span>Password</span>
                                <input type="text" placeholder='Password' />
                            </label>
                            <div className="forgot-account">
                                <p>Forgot your password?</p>
                                <p>Create new account</p>
                            </div>

                            <div className="btn">Login Now</div>


                        </div>

                        <div className="social-line">
                            <p>You can also login with:</p>
                            <div className="social-icons">
                                <span><FaFacebookF /></span>
                                <span><FaGoogle /></span>
                                <span><RiTwitterXLine /></span>
                            </div>
                        </div>

                    </div>


                    <div className="right-login bg-img-cover"></div>
                    
                </div>
            </div>
        </div>
    )
}

export default Login
