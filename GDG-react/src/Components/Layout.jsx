import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import "../App.css";
import useTheme from "../hooks/useTheme";

const Layout = () => {
  const { light } = useTheme();
  return (
    <div
      style={
        light 
          ? { background: "white", color: "black", width: "100%" }
          : { background: "black", color: "white", width: "100%" }
      }
    >
      <div className="App">
        <Nav />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
