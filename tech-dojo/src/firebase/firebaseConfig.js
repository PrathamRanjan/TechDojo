import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOqnVfVVU5CNR5h9blu7Yk1-UfvjBV7iI",
  authDomain: "techdojo-f5f03.firebaseapp.com",
  projectId: "techdojo-f5f03",
  storageBucket: "techdojo-f5f03.appspot.com",
  messagingSenderId: "62303682863",
  appId: "1:62303682863:web:92d9c0d1551d9ad3f361da",
  measurementId: "G-5MJKSJD841"
};

// ✅ Force Firebase Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider(); // 🔥 Ensure this line is present

export { auth, db, provider };
