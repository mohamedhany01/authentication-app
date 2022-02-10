import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import loginImg from "../../images/undraw_login_re_4vu2.svg";
import Controller from "../validation/Controller";
import { Navigate } from "react-router-dom";
import { useAuthentication } from "../contexts/AuthenticationContext";
import { TokenStorage } from "../utilities/TokenStorage";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().trim().email("Invalid email").required("Required field"),
  password: Yup.string().trim().required("Required field"),
});

const Login = () => {
  const [APIMessage, setAPIMessage] = useState(null);
  const auth = useAuthentication();

  useEffect(() => {
    document.title = "Authentication App | Login";
  }, []);

  const onSubmit = (values) => {
    const cleanedDataFromWhiteSpaces = {
      email: values.email.trim(),
      password: values.password,
    };
    setAPIMessage(null);
    axios
      .post(`${process.env.API_URL}/login`, cleanedDataFromWhiteSpaces, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.data)
      .then((data) => {
        if (data && data.authenticated) {
          new TokenStorage().storeJWTToken(data.jwt_token);
          auth.login(data.jwt_token);
        } else {
          setAPIMessage(data.message);
        }
      })
      .catch((err) => {
        setAPIMessage(err.response.data.message);
      });
  };

  if (auth.token) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="wrapper">
        <main>
          <div className="shadow-effect-container">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form method="post">
                  <header className="register-header">
                    <figure>
                      <img src={loginImg} alt="Image header" width={150} />
                    </figure>
                  </header>
                  <div className="register-title responsive-text">
                    <div className="app-text">Simple Authentication App</div>
                    <div className="page-name tertiary-color">Login</div>
                  </div>
                  <div className={`api-message ${APIMessage ? "active" : ""}`}>
                    <div>
                      <span className="icon icon-notification"></span>
                      <span>{APIMessage}</span>
                    </div>
                  </div>
                  <div className="inputs-container">
                    <Controller
                      control="input"
                      type="text"
                      label="Email:"
                      name="email"
                      placeholder="Enter email"
                      className="input-row"
                    />
                    <Controller
                      control="input"
                      type="password"
                      label="Password:"
                      name="password"
                      placeholder="Enter assword"
                      className="input-row"
                    />
                  </div>
                  <button
                    type="submit"
                    className="app-button primary-button fw-bold"
                  >
                    Login
                  </button>
                  <hr />
                  <p className="login-hint fw-regular">
                    You don't have an account? <a href="/register">Register</a>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
