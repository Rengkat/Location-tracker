import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
const SideBar = () => {
  return (
    <div>
      <div className="links">
        <NavLink to={"/"} className="link">
          <FaLocationDot /> <span>Location</span>
        </NavLink>
        <NavLink to={"/history"} className="link">
          <FaHistory /> <span>History</span>
        </NavLink>
        <NavLink to={"/setting"} className="link">
          <IoSettings /> <span>Setting</span>
        </NavLink>
        <div className="link">
          <IoLogOut /> <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
