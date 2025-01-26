import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <header className="header">
        <div className="logo">
            goMedia.com
        </div>
        <div className="nav-list">
            <ul className='nav-item'>
                <li className='item'><Link to="/">Home</Link></li>
                <li className='item'><Link to="/why-us">WhyUs</Link></li>
                <li className='item'><Link to="/portfolio">Portfolio</Link></li>
                <li className='item'><Link to="/blog">Blogs</Link></li>
                <li className='item'><Link to="/contact-us">ContactUS</Link></li>
                <li className='item'><Link to="/login">Login</Link></li>
            </ul>
        </div>
    </header>
    </>
  )
}

export default Navbar