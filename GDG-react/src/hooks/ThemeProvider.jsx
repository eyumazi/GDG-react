import { useState } from "react";
import ThemeContext from "./ThemeContext";

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const [black, setBlack] = useState(true);

  const toggleTheme = () => {
    setBlack((prevBlack) => !prevBlack);
  };

  return (
    <ThemeContext.Provider value={{ black, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
