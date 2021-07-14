import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import Logo from '../../asset/logo.png'

const Header = () => {
    return (
        <div className="home-navbar">
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
                    <li><Link className="navbar-link" to="/">Home</Link></li>
                    <li><Link className="navbar-link" to="/mangoswap">Start Up</Link></li>
                    <li className="display-navbar-dropdown">
                        <Link className="navbar-link" to="/learn">Loan</Link>
                        <ul className="navbar-dropdown">
                            <li><Link className="navbar-link" to="/home">Course Module Part1</Link></li>
                            <li><Link className="navbar-link" to="/service">Course Module Part2</Link></li>
                            <li><Link className="navbar-link" to="/progress/home">Progress Part1</Link></li>
                            <li><Link className="navbar-link" to="/progress/service">Progress Part2</Link></li>
                            <li><Link className="navbar-link" to="/course/pause">Course Pause</Link></li>
                            <li><Link className="navbar-link" to="/course/play">Cause Play</Link></li>
                            <li><Link className="navbar-link" to="/course/completed/home">Complete Part1</Link></li>
                            <li><Link className="navbar-link" to="/course/completed/service">Complete Part2</Link></li>
                        </ul>
                    </li>
                </ul>
                
            </div>
            <div class="searchBox">
                <input className="searchInput"type="text" name="" placeholder="Search"/>
                <button className="searchButton" href="#">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
    )
}

export default Header






