import React from 'react'
import './navbar.css'
import Logo from '../../asset/logo.png'

const Header = () => {
    return (
        <div className="header-navbar">
            <div className="logo-fontawsome">
                <img className="logo" src={Logo} />
                <ul className="navbar-list">
                    <li><i class="fab fa-twitter"></i></li>
                    <li><i class="fab fa-facebook-square"></i></li>
                    <li><i class="fab fa-linkedin"></i></li>
                    <li><i class="fab fa-instagram"></i></li>
                </ul>
            </div>
            <div className="logo-fontawsome">
                <ul className="navbar-list">
                    <li>Get Built</li>
                    <li>Events</li>
                    <li>Learn</li>
                    <li>Join</li>
                </ul>
                <span className="navbar-font-search">
                    <i class="fas fa-search navbar-font-search-content"></i>
                </span>
            </div>
        </div>
    )
}

export default Header
