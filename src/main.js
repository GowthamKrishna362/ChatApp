import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App.js";
import { AuthProvider } from "./Contexts/AuthContext.js";
import { ChatProvider } from "./Contexts/ChatContext.js";
import { StompProvider } from "./Contexts/StompContext.js";
import { BrowserRouter } from "react-router-dom";
import "./scss/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <ChatProvider>
        <StompProvider>
          <App />
        </StompProvider>
      </ChatProvider>
    </AuthProvider>
  </BrowserRouter>
);
