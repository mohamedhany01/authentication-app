import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuthentication } from "../contexts/AuthenticationContext";
import { useUser } from "../contexts/UserContext";
import { TokenStorage } from "../utilities/TokenStorage";

const Profile = () => {
  const auth = useAuthentication();
  const tokenManager = new TokenStorage();
  const user = useUser();
  const navigator = useNavigate();

  useEffect(() => {
    document.title = "Authentication App | Profile";
  }, []);

  useEffect(() => {
    auth.login(tokenManager.getJWTToken());
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.API_URL}/`, {
        headers: {
          Authorization: tokenManager.getJWTToken(),
        },
      })
      .then((response) => response.data)
      .then((data) => {
        user.setData(JSON.parse(data.user_data));
      })
      .catch(() => {
        tokenManager.deleteJWTToken();
        user.deleteData();
        navigator("login");
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <main>
          <section className="user-info">
            <header className="responsive-text">
              <h1>Welcome, {user.userData?.first_name ?? "Null"}</h1>
            </header>
            <div className="table-user-data responsive-text">
              <table>
                <caption>User Info</caption>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>E-mail</th>
                    <th>Has a token</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{user.userData?.id ?? "Null"}</td>
                    <td>
                      {user.userData?.first_name
                        ? `${user.userData?.first_name ?? ""} ${
                            user.userData?.last_name ?? ""
                          }`
                        : "Null"}
                    </td>
                    <td>{user.userData?.email ?? "Null"}</td>
                    <td>{tokenManager.hasToken() ? "Yes" : "No"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Profile;
