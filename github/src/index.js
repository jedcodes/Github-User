import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "./Context/userContext";
import "./Styles/main.scss";
import AppContextProvider from "./Context/AppContext";

ReactDOM.render(
  <UserContextProvider>
    <AppContextProvider>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </AppContextProvider>
  </UserContextProvider>,
  document.getElementById("root")
);
