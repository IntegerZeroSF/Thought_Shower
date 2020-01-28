import React from "react";
import "./Header.css";
import CreateBtn from "../Create/CreateBtn";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headerBody">
      <nav className="nav">
        <Link to="/" className="navTitle">
          Thought Shower
        </Link>

        <ul className="navList">
          <li className="navItem">Home</li>
          <li className="navItem">
            <CreateBtn />
          </li>
          <li className="dropdown">
            Search
            <div className="dropdownContent">
              <div className="dropdownLink">Sample 1</div>
              <div className="dropdownLink">Sample 2</div>
              <div className="dropdownLink">Sample 3</div>
            </div>
          </li>
          <li className="navItem">About Us</li>
          <li className="navItem">Login</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
