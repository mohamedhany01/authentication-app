import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import registerImg from "../../images/undraw_referral_re_0aji.svg";
import Controller from "../validation/Controller";
import { Navigate } from "react-router-dom";
import { useAuthentication } from "../contexts/AuthenticationContext";
import { TokenStorage } from "../utilities/TokenStorage";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().trim().required("Required field"),
  lastName: Yup.string().trim().required("Required field"),
  email: Yup.string().trim().email("Invalid email").required("Required field"),
  password: Yup.string().trim().required("Required field"),
  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Required field"),
});

const Register = () => {
  const [APIMessage, setAPIMessage] = useState(null);
  const auth = useAuthentication();

  useEffect(() => {
    document.title = "Authentication App | Register";
  }, []);

  const onSubmit = (values) => {
    const cleanedDataFromWhiteSpaces = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim(),
      password: values.password,
    };

    setAPIMessage(null);

    axios
      .post(`${process.env.API_URL}/register`, cleanedDataFromWhiteSpaces, {
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
        setAPIMessage(err.response);
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
                      <img src={registerImg} alt="Image header" width={150} />
                    </figure>
                  </header>
                  <div className="register-title responsive-text">
                    <div className="app-text">Simple Authentication App</div>
                    <div className="page-name tertiary-color">Registration</div>
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
                      label="First Name:"
                      name="firstName"
                      placeholder="Enter first name"
                      className="input-row"
                    />
                    <Controller
                      control="input"
                      type="text"
                      label="Last Name:"
                      name="lastName"
                      placeholder="Enter last name"
                      className="input-row"
                    />
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
                      placeholder="Enter password"
                      className="input-row"
                    />
                    <Controller
                      control="input"
                      type="password"
                      label="Confirm Password:"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      className="input-row"
                    />
                  </div>
                  <button
                    type="submit"
                    className="app-button primary-button fw-bold"
                  >
                    Register
                  </button>
                  <hr />
                  <p className="login-hint fw-regular">
                    You are already have an account? <a href="/login">Login</a>
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

export default Register;
