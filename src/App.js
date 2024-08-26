import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'scss/base/common.scss';

import Chat from './Components/Chat/Chat.js';
import Login from './Components/Credentials/Login/Login.js';
import SignUp from './Components/Credentials/SignUp/SignUp.js';
import ProtectedRoute from './Components/Shared/ProtectedRoute/ProtectedRoute.js';

const App = () => {
  return (
    <>
      <ToastContainer />
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
    </>
  );
};

export default App;
