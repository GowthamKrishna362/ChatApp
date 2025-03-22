import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PAGE_ROUTES } from "@constants/pageRoutes.js";

import "scss/base/common.scss";

import Chat from "@components/Chat/Chat.js";
import Login from "@components/Credentials/Login/Login.js";
import SignUp from "@components/Credentials/SignUp/SignUp.js";
import ProtectedRoute from "@components/Shared/ProtectedRoute/ProtectedRoute.js";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" exact element={<Navigate to={PAGE_ROUTES.LOGIN} />} />
        <Route path={PAGE_ROUTES.LOGIN} element={<Login />} />
        <Route path={PAGE_ROUTES.SIGNUP} element={<SignUp />} />
        <Route
          path={PAGE_ROUTES.CHAT}
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
