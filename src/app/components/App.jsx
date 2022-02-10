import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* Pages */
import Login from "../pages/Login";

/* Styles */
import "normalize.css/normalize.css";
import "../../styles/sass/main.scss";
import { useAuthentication } from "../contexts/AuthenticationContext";
import LoginRequired from "../utilities/LoginRequired";
import { TokenStorage } from "../utilities/TokenStorage";

/* Lazy Components */
const LazyRegister = lazy(() => import("../pages/Register"));
const LazyNotfound = lazy(() => import("../pages/NotFound"));
const LazyProfile = lazy(() => import("../pages/Profile"));

const App = () => {
  const auth = useAuthentication();

  useEffect(() => {
    auth.login(new TokenStorage().getJWTToken());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback="Loading...">
              <LoginRequired>
                <LazyProfile />
              </LoginRequired>
            </Suspense>
          }
        />
        <Route
          path="register"
          element={
            <Suspense fallback="Loading...">
              <LazyRegister />
            </Suspense>
          }
        />
        <Route path="login" element={<Login />} />
        <Route
          path="*"
          element={
            <Suspense fallback="Loading...">
              <LazyNotfound />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
