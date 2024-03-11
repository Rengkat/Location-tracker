import "./style.css";
import UserDetail from "./UserDetail";
import { FaEdit } from "react-icons/fa";
const Setting = () => {
  return (
    <div>
      <div className="setting-container">
        <div className="profile">
          <h1>Profile Details</h1>
          <UserDetail />
        </div>
        <div className="language">
          <h1>Display Language</h1>
          <p>Manage the language of your Search display, and select preferences for your results</p>
          <input type="text" />
        </div>
        <button className="edit-btn">
          <span>Edit detail</span>
          <FaEdit />
        </button>
      </div>
    </div>
  );
};

export default Setting;
