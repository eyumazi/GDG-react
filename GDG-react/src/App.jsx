import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Page404 } from "./pages/Page404";
import { UserInfoList } from "./pages/UserInfoList";
import { UserInfo } from "./pages/UserInfo";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/UserInfoList" element={<UserInfoList />} />
        <Route path="/UserInfo/:userId" element={<UserInfo />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
