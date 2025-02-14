import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleSignOut = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <div className="profile-page">
      <h1>Your Profile</h1>

      <div className="profile-card">
        <img src={user.photoURL || "https://via.placeholder.com/80"} alt="Profile" />
        <h2>{user.displayName || "User"}</h2>
        <p>{user.email}</p>

        <button className="signout-btn" onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Profile;
