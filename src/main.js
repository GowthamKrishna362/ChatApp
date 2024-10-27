import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App.js";
import { AuthProvider } from "./contexts/AuthContext.js";
import { StompProvider } from "./contexts/StompContext.js";
import "./scss/main.scss";
import store from "./store.js";
import { VideoChatProvider } from "@contexts/VideoChatContext.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <StompProvider>
          <VideoChatProvider>
            <App />
          </VideoChatProvider>
        </StompProvider>
      </AuthProvider>
    </BrowserRouter>
  </Provider>
);
