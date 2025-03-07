import "../login.css";
import useUser from "../hooks/useUser";

const LogIn = () => {
  const { loggedIn, userName, toggleLogin, setUserName } = useUser();

  return (
    <div className="login-form-container">
      {loggedIn ? (
        <div className="profile-view">
          <h1 className="log">Logged In</h1>
          <h2>Welcome {userName}</h2>
          <button onClick={toggleLogin}>LogOut</button>
        </div>
      ) : (
        <form className="login-form">
          <div className="form-group">
            <label>
              UserName:
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="Enter User Name"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Password:
              <input
                type="password"
                placeholder="Enter your password"
                className="form-input"
              />
            </label>
          </div>
          <button className="form-button" type="button" onClick={toggleLogin}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default LogIn;
