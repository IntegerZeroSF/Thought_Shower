import React from 'react';
import './Header.css'



function Header() {
    return (
        <div className="headerBody">
            <nav className="nav">
                <div className="navTitle">Thought Shower</div>
                <ul className="navList">
                    <li className="navItem">Services</li>
                    <li className="navItem">About Us</li>
                    <li className="navItem">Blog</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;