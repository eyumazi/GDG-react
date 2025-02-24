import "./App.css";
import { Note } from "./Components/Note";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactTaskManager from "./Components/ReactTaskManager";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/note">Note</Link>
          </li>
          <li>
            <Link to="/task-manager">Task Manager</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to the App</h1>} />
        <Route path="/note" element={<Note />} />
        <Route path="/task-manager" element={<ReactTaskManager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
