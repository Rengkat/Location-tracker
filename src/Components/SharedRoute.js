import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const SharedRoute = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default SharedRoute;
