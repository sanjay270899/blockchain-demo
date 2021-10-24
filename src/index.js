import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./config/twind.config";
import "twind/shim";
import { Home } from "./pages";
import ReactTooltip from "react-tooltip";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <ReactTooltip place="bottom" type="light" effect="solid" border />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
