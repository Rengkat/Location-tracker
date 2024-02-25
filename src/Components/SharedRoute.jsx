import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const SharedRoute = () => {
  return (
    <div className="container">
      <div className="nav">
        <NavBar />
      </div>
      <main className="flex-main">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default SharedRoute;
