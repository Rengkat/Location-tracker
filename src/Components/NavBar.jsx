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
        <div className="left">
          <h3>
            <span className="zidio">Zidio</span>
          </h3>
          <div className="scr">
            <input className="search" placeholder="search location" type="text" />
            <span className="btn"> Search</span>
          </div>
        </div>
        <div className="right">
          <div className="notification">
            <span className="not">Notifications</span>
            <span className="not-btn">4</span>
          </div>
          <div className="user">
            <span style={{ color: "white" }}>
              <FaUserLarge fontsize={30} />
            </span>
            <span className="use">User</span>
            <span className="caret">
              <FaCaretDown />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
