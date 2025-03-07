import { useState } from "react";
import ThemeContext from "./ThemeContext";

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const [light, setLight] = useState(true);
  return (
    <ThemeContext.Provider value={{ light, setLight }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
