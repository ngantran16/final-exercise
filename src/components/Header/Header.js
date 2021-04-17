import React from 'react';
import Images from '../../themes/Images';
import './Header.scss';
import { FaHome } from "react-icons/fa";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={Images.uberIcon} alt="uber-icon" className="uber-icon" />
                <div> Uberbd </div>
            </div>
            <div>
                <div class="dropdown">
                    <img src={ Images.menuIcon } alt="menu-icon" className="menu-icon" />
                    <div class="dropdown-content">
                    <FaHome /><a href="#">Home</a>
                    <a href="#">Profile</a>
                    <a href="#">Your Book</a>
                    <a href="#">Favourites</a>
                    <a href="#">Your Book</a>
                    <a href="#">Notifications</a>
                    <a href="#">Setting</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;