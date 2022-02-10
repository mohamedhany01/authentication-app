import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { TokenStorage } from "../utilities/TokenStorage";

const Navbar = () => {
  const tokenManager = new TokenStorage();
  const user = useUser();
  const [showNav, setShowNav] = useState(false);
  const navigator = useNavigate();

  return (
    <>
      <header>
        <div className="profile-header-container">
          <div className="wrapper">
            <div className="header-items">
              <div className="logo">
                <span className="fw-bold">Authentication App</span> | Profile
              </div>
              <div className="nav-btn-container">
                <button
                  className="app-button bg-tertiary"
                  onClick={() => setShowNav(!showNav)}
                >
                  <span
                    className={`primary-color icon ${
                      showNav ? "active icon-cross" : "icon-menu"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </div>
          <nav id="profile-nav" className={showNav ? "active" : null}>
            <ul className="nav-items">
              <li>
                <div className="wrapper">
                  <p className="greeting-text">
                    Welcome,{" "}
                    <strong>{user.userData?.first_name ?? "Null"}</strong>
                  </p>
                </div>
              </li>
              <li>
                <button
                  className="logout-btn app-button fw-bold"
                  onClick={() => {
                    tokenManager.deleteJWTToken();
                    user.deleteData();
                    navigator("login");
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
