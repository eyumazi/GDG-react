import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { UserInfoList } from "./pages/UserInfoList";
import { UserInfo } from "./pages/UserInfo";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import LogIn from "./pages/User";
import { LiveSearch } from "./Components/liveSearch";
import { CharacterCount } from "./Components/CharacterCount";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "user", element: <LogIn /> },
      { path: "UserInfoList", element: <UserInfoList /> },
      { path: "UserInfo/:userId", element: <UserInfo /> },
      { path: "liveSearch", element: <LiveSearch /> },
      { path: "counter", element:<CharacterCount/>}
    ],
  },
]);

export default routes;
