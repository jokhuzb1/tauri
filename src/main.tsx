import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";

// Mount the App component into the DOM
const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
