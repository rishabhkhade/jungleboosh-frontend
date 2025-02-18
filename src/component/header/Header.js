import React from 'react'
import "./Header.scss"
import logo_header from "../../assets/header/Untitled design.png"
import { IoIosCall } from "react-icons/io";

function Header() {
  return (
    <>
      <div className='parent header-parent'>
        <div className='container header-container'>
          <div className='logo'><img src={logo_header} /></div>
          <div className='links'>
            <span className='btn'>login</span>
            <span className='border-btn'>sign up</span>
            {/* <div className="call-info">
              <div className="phone-icon"><IoIosCall /></div>
              <div className="no-text">
              <span>call for more info</span>
              <span>9865954782</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
