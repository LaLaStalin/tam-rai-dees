import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GlobalContexts from "./util/context";
import { HashRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalContexts>
        <App />
      </GlobalContexts>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
