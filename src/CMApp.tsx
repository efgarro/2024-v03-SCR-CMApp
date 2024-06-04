import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./components/auth/AuthContext";
import AuthChoices from "./components/auth/AuthChoices";
import ConfirmSignUp from "./components/auth/ConfirmSignUp";
import ConfirmResetPassword from "./components/auth/ConfirmResetPassword";

import Dashboard from "./layouts/Dashboard";
import AboutPage from "./components/AboutPage";
import Company from "./components/Company";
import NotFound from "./components/NotFound";
import "./css/styles.css";
import RegisterPlace from "./components/register/RegisterPlace";
import LoginPage from "./layouts/LoginPage";

const CMApp = () => {
  const isAuthenticated = () => {
    const accessToken = sessionStorage.getItem("accessToken");
    return !!accessToken;
  };
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="auth" element={<AuthChoices />} />
          <Route path="auth/confirm/signup" element={<ConfirmSignUp />} />
          <Route path="auth/confirm/reset" element={<ConfirmResetPassword />} />
          <Route
            path="/"
            element={
              isAuthenticated() ? (
                <Dashboard />
              ) : (
                <Navigate replace to="/auth" />
              )
            }
          >
            <Route index element={<RegisterPlace />} />
            <Route path="register/places" element={<RegisterPlace />} />
            <Route
              path="register/articles"
              element={<div>register/articles</div>}
            />
            <Route path="manage/places" element={<div>manage/places</div>} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="about" element={<AboutPage />} />
          <Route path="company" element={<Company />} />
          {/* <Route path="/error" element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default CMApp;
