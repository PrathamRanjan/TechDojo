import React from "react";
import { auth, provider } from "../firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User logged in:", result.user);
        navigate("/home"); // Redirect after login
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <div style={styles.container}>
      <h1>Tech Dojo</h1>
      <button style={styles.button} onClick={signIn}>Sign in with Google</button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  button: {
    backgroundColor: "#4285F4",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Login;

