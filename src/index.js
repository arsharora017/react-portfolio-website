// import React from "react";
// import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";

// ReactDOM.render(<App />, document.);

import { createRoot } from "react-dom/client";
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App tab="home" />);
