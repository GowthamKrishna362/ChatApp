import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App.js";
import { Provider } from "react-redux";
import { AuthProvider } from "./Contexts/AuthContext.js";
import { StompProvider } from "./Contexts/StompContext.js";
import { BrowserRouter } from "react-router-dom";
import store from "./store.js";

import "./scss/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <StompProvider>
          <App />
        </StompProvider>
      </AuthProvider>
    </BrowserRouter>
  </Provider>
);
