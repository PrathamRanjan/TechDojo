import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOqnVfVVU5CNR5h9blu7Yk1-UfvjBV7iI",
  authDomain: "techdojo-f5f03.firebaseapp.com",
  projectId: "techdojo-f5f03",
  storageBucket: "techdojo-f5f03.appspot.com", // ✅ Fixed storageBucket
  messagingSenderId: "62303682863",
  appId: "1:62303682863:web:92d9c0d1551d9ad3f361da",
  measurementId: "G-5MJKSJD841" // Optional: Remove if not using Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider(); // ✅ Google Auth Provider (if needed)

export { auth, db, provider };
