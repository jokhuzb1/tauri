import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./components/ui/provider";
import App from "./App";
import "./style.css";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
