import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import MobileNav from "./MobleNav";

const SharedRoute = () => {
  return (
    <div className="container">
      <div className="nav">
        <NavBar />
      </div>
      <main className="flex-main">
        <div className="side-bar">
          <div className="side-bar-cont">
            <SideBar />
          </div>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
        <div className="mobile">
          <MobileNav />
        </div>
      </main>
    </div>
  );
};

export default SharedRoute;
