import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/");
      } else {
        setUser(currentUser);
      }
    });
  }, [navigate]);

  const logout = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.logo}>Tech Dojo</h1>
        <div style={styles.profile}>
          <Avatar src={user?.photoURL} alt={user?.displayName} />
          <p>{user?.displayName}</p>
          <button style={styles.logoutButton} onClick={logout}>Logout</button>
        </div>
      </header>
      <h2>Welcome {user?.displayName}, start your learning journey!</h2>
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
  },
  logo: {
    fontWeight: "bold",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logoutButton: {
    backgroundColor: "#ff4d4d",
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Home;

