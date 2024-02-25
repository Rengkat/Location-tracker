import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/auth/Login";
import SharedRoute from "./Components/SharedRoute";
import Location from "./Pages/location/Location";
import History from "./Pages/history/History";
import Setting from "./Pages/setting/Setting";
import Register from "./Pages/auth/Register";
function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<SharedRoute />}>
        <Route index element={<Location />} />
        <Route path="history" element={<History />} />
        <Route path="setting" element={<Setting />} />
      </Route>
    </Routes>
  );
}

export default App;
