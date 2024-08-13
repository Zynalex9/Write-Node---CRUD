import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, signOut } from "firebase/auth";

import Logo from "../assets/logo.png";
const Header = () => {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );
  function handleSignOut() {
    signOut(auth);
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
  }
  function handleLogIn() {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result.user.accessToken);
      if (result.user.accessToken) {
        setIsAuth(true);
        localStorage.setItem("isAuth", true);
      }
    });
  }
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="WriteNode Logo" />
        <span>WriteNode</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        {isAuth ? (
          <>
            <NavLink to="/create" className="link">
              Create
            </NavLink>
            <button onClick={handleSignOut} className="auth">
              <i className="bi bi-box-arrow-right"></i> Logout
            </button>
          </>
        ) : (
          <button onClick={handleLogIn} className="auth">
            <i className="bi bi-google"></i> Login
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
