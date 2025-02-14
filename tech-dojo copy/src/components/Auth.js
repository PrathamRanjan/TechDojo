import React, { useState } from "react";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      let userCredential;
      if (isSignup) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Signed Up:", userCredential.user);
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Logged In:", userCredential.user);
      }
      navigate("/home");
    } catch (error) {
      console.error("Authentication Error:", error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      if (auth.currentUser) return;
      const result = await signInWithPopup(auth, provider);
      console.log("Google Sign-In:", result.user);
      navigate("/home");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <h1 style={styles.title}>Tech Dojo</h1>
      </div>
      <div style={styles.rightPanel}>
        <form style={styles.form} onSubmit={handleAuth}>
          {isSignup && (
            <>
              <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={styles.input} />
              <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} style={styles.input} />
            </>
          )}
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} required />
          <button type="submit" style={styles.button}>{isSignup ? "Sign Up" : "Login"}</button>
          <p style={styles.toggle} onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Already have an account? Login" : "Don't have an account? Sign up"}
          </p>

          {/* ✅ Improved "or" separator with real lines */}
          <div style={styles.separatorContainer}>
            <hr style={styles.line} />
            <span style={styles.orText}>or</span>
            <hr style={styles.line} />
          </div>

          <button type="button" style={styles.googleButton} onClick={handleGoogleSignIn}>
            <span style={styles.googleIcon}>G</span> Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f5f7fa",
    fontFamily: "'Poppins', sans-serif",
  },
  leftPanel: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  rightPanel: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eeeeee",
    padding: "40px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
    borderRadius: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "350px",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    width: "100%",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontFamily: "'Poppins', sans-serif",
  },
  button: {
    backgroundColor: "#6A0DAD",
    color: "white",
    padding: "12px",
    width: "100%",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    fontFamily: "'Poppins', sans-serif",
  },
  googleButton: {
    backgroundColor: "#6A0DAD",
    color: "white",
    padding: "12px",
    width: "100%",
    maxWidth: "350px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
  googleIcon: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  toggle: {
    fontSize: "14px",
    color: "#6A0DAD",
    cursor: "pointer",
    marginTop: "10px",
    fontFamily: "'Poppins', sans-serif",
  },
  separatorContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: "20px 0",
    position: "relative",
  },
  line: {
    flex: 1,
    height: "1px",
    backgroundColor: "#999",
    border: "none",
    margin: "0 10px",
  },
  orText: {
    fontSize: "14px",
    color: "#999",
    fontFamily: "'Poppins', sans-serif",
    position: "absolute",
    backgroundColor: "#eeeeee", // Background to overlap the line
    padding: "0 10px",
  },
};

export default Auth;
