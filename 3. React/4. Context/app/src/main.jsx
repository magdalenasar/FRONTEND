import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context.Provider>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
