import React from 'react'
import "./index.scss"
import { FaHeart } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <div id='footer-top'>
<div className="container">
  <div className="footer-top">
    <div className="company">
      <h2>Company</h2>
      <p>About us</p>
      <p className='middle'>Servcies</p>
      <p>Contact us</p>
    </div>
    <div className="account">
    <h2>Account</h2>
      <p>My cart</p>
      <p className='middle'>Wisslist</p>
      <p>Login/Register</p>
    </div>
    <div className="newletter">
      <h2>Newletter</h2>
      <p className='middle-1'>Subcribe to our newsletter to get more <br /> free tips. No Spam, Promise.</p>
      <input type="text" placeholder='Email' />
      <button className='btn-subs'>SUBSCRIBE</button>
    </div>
    <div className="getintouch">
      <h2>Get in touch</h2>
      <p>69 North Cleveland Street, Memphis,USA.</p>
      <p className='middle'>(123) 8111 9210 - (012) 1111 6868</p>
      <p>Florisr@supportthem.com</p>
    </div>
  </div>
</div>
      </div>

      <div id='footer-bottom'>
        <div className="container">
          <div className="footer-bottom">
            <p>Copyright ©2024 All rights reserved | This template is made with</p>
           <i> <FaHeart /></i>
            <p>by</p>
            <p className='color'>Colorlib</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer