import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "./Styles/main.scss";
import AppContextProvider from "./Context/AppContext";

ReactDOM.render(
  <AppContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </AppContextProvider>,
  document.getElementById("root")
);
