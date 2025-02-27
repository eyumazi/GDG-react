import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import { Home, Contact, About, UserProfile } from "./Components/Home";
function App ()
{
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/UserProfile/:useId" element={<UserProfile />} />
       <Route path="*" element={<Home />} />
     </Routes>
   </BrowserRouter>;
}
export default App;