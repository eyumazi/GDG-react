import{ useState } from "react";
import UserContext from "./userContext";

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const toggleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <UserContext.Provider
      value={{ loggedIn, userName, toggleLogin, setUserName }}
    >
      {children}
    </UserContext.Provider>
  );
};
