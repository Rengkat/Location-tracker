import { createContext, useReducer } from "react";
import Reducer from "./Reducer";
const AppContext = createContext();
const initialState = {
  isSideBarOpen: false,
};
const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const toggleSideBar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };
  return <AppContext.Provider value={{ toggleSideBar }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
