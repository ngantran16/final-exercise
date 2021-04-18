import React from 'react';
import Images from '../../themes/Images';
import './Header.scss';
import { FaHome, FaUserCircle, FaCartPlus, FaStar, FaBell } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={Images.uberIcon} alt="uber-icon" className="uber-icon" />
                <div> Uberbd </div>
            </div>
            <div>
                <div className="dropdown">
                    <img src={ Images.menuIcon } alt="menu-icon" className="menu-icon" />
                    <div className="dropdown-content">
                        <a href="/"><FaHome color="#888888" /><span>Home</span></a>
                        <a href="reactjs.org"><FaUserCircle color="#888888" /><span>Profile</span></a>
                        <a href="reactjs.org"><FaCartPlus color="#888888" /><span>Your Book</span></a>
                        <a href="reactjs.org"><FaStar color="#888888" /><span>Favourites</span></a>
                        <a href="reactjs.org"><FaBell color="#888888" /><span>Notifications</span></a>
                        <a href="reactjs.org"><MdSettings color="#888888" /><span>Setting</span></a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;