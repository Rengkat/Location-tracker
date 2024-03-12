// eslint-disable-next-line no-unused-vars
import React from "react";
// import profile from "./Image/profile.png";
import { FaUserLarge } from "react-icons/fa6";
// import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import "./Navbar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <h3>
          <span className="zidio">Zidio</span>
        </h3>
        <div className="scr">
          <input className="search" placeholder="search..." type="text" />
          <span className="btn"> Search</span>
        </div>
        <div className="notification">
          <span className="not">Notifications</span>
          <span className="not-btn">4</span>
        </div>
        <div className="user">
          <img src={profile}  className="pro"/>
          <span className="use">User</span>
          <span className="caret"><FaCaretDown/></span>
          {/* <span className="not-btn">4</span> */}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
