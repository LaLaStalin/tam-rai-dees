import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GlobalContexts from "./util/context";

// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <GlobalContexts>
      <App />
    </GlobalContexts>
  </React.StrictMode>,
  document.getElementById("root")
);
