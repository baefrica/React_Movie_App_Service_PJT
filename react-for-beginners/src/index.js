import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// style.css 적용
// import "./style.css";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  // <React.StrictMode>
  <>
    <App />
  </>
  // </React.StrictMode>
);
