import React, { useState, createContext, useContext } from "react";
import { SESSION_STORAGE_KEYS } from "Constants/globalConstants.js";
import { useNavigate } from "react-router-dom";
import { getUsername } from "Services/utils/globalUtils.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!getUsername());
  function login(username) {
    setIsLoggedIn(true);
    sessionStorage.setItem(SESSION_STORAGE_KEYS.USERNAME, username);
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

export const useAuth = () => useContext(AuthContext);
