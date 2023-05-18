import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DarkModeContextProvider } from "./Context/DarkModeContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);
