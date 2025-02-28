import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import "./App.css";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Page404 } from "./Components/Page404";
import { UserInfoList } from "./Components/UserInfoList";
import { UserInfo } from "./Components/UserInfo";
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
        <Route path="/UserInfoList" element={<UserInfoList/>}/>
        <Route path="/UserInfo/:userId" element={<UserInfo />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
