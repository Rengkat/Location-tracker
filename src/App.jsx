import "./App.css";
import { Route, Routes } from "react-router-dom";
import signUp from "./Pages/signUp";
import Login from "./Pages/login";
import SharedRoute from "./Components/SharedRoute";
import Location from "./Pages/location/Location";
import History from "./Pages/history/History";
import Setting from "./Pages/setting/Setting";
function App() {
  return (
    <Routes>
      <Route element={<signUp />} />
      <Route element={<Login />} />
      <Route element={<SharedRoute />}>
        <Route index element={<Location />} />
        <Route element={<History />} />
        <Route element={<Setting />} />
      </Route>
    </Routes>
  );
}

export default App;
