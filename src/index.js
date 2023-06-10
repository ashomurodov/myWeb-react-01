import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./app";
/***
 * packages
 * utils
 * components
 * assets (images/videos/css/sass)
 *
 *
 *
 */

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(
  <div className="container">
    <App />
  </div>
);
