import React from 'react';
import PropTypes from 'prop-types';
import { useAuth } from 'Contexts/AuthContext.js';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.element,
};

export default ProtectedRoute;
