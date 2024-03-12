import "./MobieNav.css";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
const MobileNav = () => {
  return (
    <div>
      <div className="mobile-links">
        <NavLink to={"/"} className="mobile-link">
          <FaLocationDot /> <span>Location</span>
        </NavLink>
        <NavLink to={"/history"} className="mobile-link">
          <FaHistory /> <span>History</span>
        </NavLink>
        <NavLink to={"/setting"} className="mobile-link">
          <IoSettings /> <span>Setting</span>
        </NavLink>
        {/* <div className="mobile-link">
          <IoLogOut /> <span>Logout</span>
        </div> */}
      </div>
    </div>
  );
};

export default MobileNav;
