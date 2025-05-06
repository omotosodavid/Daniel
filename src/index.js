import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./page/Main";import { BrowserRouter } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Main/>
    </BrowserRouter>
  </React.StrictMode>
);
