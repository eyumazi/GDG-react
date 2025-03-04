import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { UserInfoList } from "./UserInfoList";
import { UserInfo } from "./UserInfo";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/UserInfoList", element: <UserInfoList /> },
      { path: "/UserInfo/:userId", element: <UserInfo /> },
    ],
  },
]);

export default routes;
