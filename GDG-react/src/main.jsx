import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThemeProvider from "./hooks/ThemeProvider.jsx";
import { UserProvider } from "./hooks/userProvider.jsx";
import { RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </UserProvider>
  </StrictMode>
);
