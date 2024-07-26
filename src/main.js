import React from "react";
import ReactDOM from "react-dom/client";
import Chat from "./components/Chat/index.js";
import './scss/main.scss'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Chat/>
  </React.StrictMode>
);
