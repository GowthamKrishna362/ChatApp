import React, { useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { SESSION_STORAGE_KEYS } from '@constants/globalConstants.js';
import { getUsername } from '@utils/globalUtils.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!getUsername());
  function login(username, token) {
    setIsLoggedIn(true);
    sessionStorage.setItem(SESSION_STORAGE_KEYS.JWT_TOKEN, token);
    sessionStorage.setItem(SESSION_STORAGE_KEYS.USERNAME, username);
    navigate('/chat');
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
