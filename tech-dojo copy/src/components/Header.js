import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseConfig";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [user] = useAuthState(auth);

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Tech Dojo</h1>
      </div>
      <nav className="nav">
        <Link to="/home" className={location.pathname === "/home" ? "active" : ""}>Home</Link>
        <Link to="/learning" className={location.pathname === "/learning" ? "active" : ""}>Learning</Link>
        <Link to="/games" className={location.pathname === "/games" ? "active" : ""}>Games</Link>
        <Link to="/classroom" className={location.pathname === "/classroom" ? "active" : ""}>Classroom</Link>
      </nav>
      <div className="header-right">
        {user && user.photoURL ? (
          <img src={user.photoURL} alt="Profile" className="profile-pic" />
        ) : (
          <div className="profile-placeholder">{user?.email?.charAt(0).toUpperCase()}</div>
        )}
      </div>
    </header>
  );
};

export default Header;
