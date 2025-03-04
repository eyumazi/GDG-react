import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import "../App.css";

const Layout = () => {
  return (
    <div>
      <div className="App">
        <Nav />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
