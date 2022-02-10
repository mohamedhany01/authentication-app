import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthentication } from "../contexts/AuthenticationContext";

const LoginRequired = ({ children }) => {
  const auth = useAuthentication();

  if (!auth.token) {
    return <Navigate to="login" />;
  }

  return children;
};

export default LoginRequired;
