import React, { useState, createContext, useContext } from "react";
import { SESSION_STORAGE_KEYS } from "Constants/globalConstants.js";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem(SESSION_STORAGE_KEYS.USERNAME));
  function login(username) {
    setIsLoggedIn(true);
    sessionStorage.setItem(SESSION_STORAGE_KEYS.USERNAME, username)
    navigate("/chat");
  }
  function logout() {
    setIsLoggedIn(false);
  }

  const contextItems = {
    isLoggedIn,
    login,
    logout,
  };
  return <AuthContext.Provider value={contextItems}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};
