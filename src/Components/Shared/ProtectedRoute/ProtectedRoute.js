import PropTypes from 'prop-types';
import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from 'Contexts/AuthContext.js';

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
