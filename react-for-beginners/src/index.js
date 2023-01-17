import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CleanUp from "./CleanUp";
// style.css 적용
// import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <>
    <CleanUp />
  </>
  // </React.StrictMode>
);
