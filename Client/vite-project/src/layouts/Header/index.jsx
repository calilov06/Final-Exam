import React from 'react'
import "./index.scss"
import { Link, NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Header = () => {
  return (
    <div id='header'>
    <div className="container">
        <div className="header">
            <div className="left">
                <img src="https://preview.colorlib.com/theme/florist/img/logo.png" alt="" />
            </div>
            <div className="middle">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/addpage">AddPage</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Service</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/">Shop</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="right">
            <CiSearch />
            <CiHeart />
            <HiOutlineShoppingBag />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header