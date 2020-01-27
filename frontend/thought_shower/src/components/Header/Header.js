import React from 'react';
import './Header.css'



function Header() {
    return (
        <div className="headerBody">
            <nav className="nav">
                <div className="navTitle">Thought Shower</div>
                <ul className="navList">
                    <li className="dropdown">Search
                        <div className="dropdownContent">
                            <div className="dropdownLink">Sample 1</div>
                            <div className="dropdownLink">Sample 2</div>
                            <div className="dropdownLink">Sample 3</div>
                        </div>
                    </li>
                    <li className="navItem">About Us</li>
                    <li className="navItem"></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;