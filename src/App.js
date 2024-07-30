import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Chat from "./Components/Chat/Chat.js";
import Login from "./Components/Credentials/Login/Login.js";
import SignUp from "./Components/Credentials/SignUp/SignUp.js";
import { AuthProvider } from "./Contexts/AuthContext.js";
import ProtectedRoute from "./Components/Shared/ProtectedRoute/ProtectedRoute.js";
import "scss/base/common.scss";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" exact element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
