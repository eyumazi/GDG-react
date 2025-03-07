import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import "../App.css";

const Nav = () => {
  const { black, toggleTheme } = useTheme();

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
      />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/UserInfoList">UserInfoList</Link>
          </li>
          <li>
            <Link to="/user">Login</Link>
          </li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme}>
              <span className="material-symbols-outlined animate-logo">
                {black ? "light_mode" : "dark_mode"}
              </span>
            </button>
          </li>
        </ul>
      </nav>
      <style>{`
        .animate-logo {
          transition: transform 0.9s ease-in-out;
        }
        .theme-toggle:hover .animate-logo {
          transform: rotate(360deg);
        }
        :root {
          --color: ${black ? "white" : "black"};
          --backgroundColor: ${black ? "black" : "white"};
        }
        body {
          color: var(--color);
          background-color: var(--backgroundColor);
        }
          .login-form{
          color: var(--color);
          background-color: var(--backgroundColor);
          }
          .form-input
          {
          color: var(--color);
          background-color: var(--backgroundColor);
          }
        nav {
          background-color: var(--backgroundColor);
        }
        nav a {
          color: var(--color);
        }
        .theme-toggle {
        background-color: var(--backgroundColor);
        color: var(--color);
        border: none;
        } 
         .profile-view {
          color: var(--color);
          background-color: var(--backgroundColor);
        }
          .profile-view h2{
           color: var(--color);
          background-color: var(--backgroundColor);
          }
          .profile-view h1{
           color: var(--color);
          background-color: var(--backgroundColor);
          }
      `}</style>
    </>
  );
};

export default Nav;
