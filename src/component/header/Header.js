import React from 'react'
import "./Header.scss"
import logo_header from "../../assets/header/Untitled design.png"
import { IoIosCall } from "react-icons/io";

function Header() {
  return (
    <>
      <div className='parent header-parent'>
        <div className='container header-container'>
          {/* <div className='logo'><img src={logo_header} /></div> */}
          <div className='logo'><h2 style={{color:"var(--accent)"}}>Jungle Boosh</h2></div>
          <div className='links'>
            <span className='border-btn'>Login</span>
            <span className='btn'>Sign up</span>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
