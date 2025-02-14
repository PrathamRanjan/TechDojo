import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import "./Learning.css";

const Learning = () => {
  const navigate = useNavigate();
  const [profileExists, setProfileExists] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    school: "",
    degree: "",
    interests: "",
    hobbies: "",
    codingGoals: "",
    skillLevel: "",
  });
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const checkProfile = async () => {
      const user = auth.currentUser;
      if (user) {
        const profileRef = doc(db, "users", user.uid);
        const profileSnap = await getDoc(profileRef);
        if (profileSnap.exists()) {
          setProfileExists(true);
        }
      }
      setLoading(false);
    };
    checkProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        await setDoc(doc(db, "users", user.uid), formData, { merge: true });
        setNotification("Profile saved successfully!");
        setTimeout(() => navigate("/learning"), 2000);
      } catch (error) {
        console.error("Error saving profile:", error);
        setNotification("Failed to save profile.");
      }
    } else {
      setNotification("No user logged in.");
    }
  };

  if (loading) return <div>Loading...</div>;

  if (!profileExists) {
    return (
      <div className="learning-container">
        <h1 className="profile-header">Create Your Profile</h1>
        {notification && <div className="notification">{notification}</div>}

        <div className="learning-form">
          <div className="learning-card">
            <h2>Basic Information</h2>
            <input name="name" placeholder="Full Name" onChange={handleChange} />
            <input name="age" placeholder="Age" onChange={handleChange} />
            <input name="school" placeholder="School" onChange={handleChange} />
            <input name="degree" placeholder="Degree" onChange={handleChange} />
          </div>

          <div className="learning-card">
            <h2>Interests & Hobbies</h2>
            <textarea name="interests" placeholder="Your interests..." onChange={handleChange} />
            <textarea name="hobbies" placeholder="Your hobbies..." onChange={handleChange} />
          </div>

          <div className="learning-card">
            <h2>Coding Goals & Skill Level</h2>
            <textarea name="codingGoals" placeholder="What do you want to learn?" onChange={handleChange} />
            <select name="skillLevel" onChange={handleChange}>
              <option value="">Select Skill Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        <div className="save-container">
          <button className="save-button" onClick={handleSubmit}>Save Profile</button>
        </div>
      </div>
    );
  }

  // ✅ After profile is created, show the "Choose Your Path" section
  return (
    <div className="learning-container">
      <div className="profile-box">Your Profile</div>
      <h1 className="choose-path-header">CHOOSE YOUR PATH</h1>

      <div className="path-container">
        <div className="path-card" onClick={() => navigate("/learning/ai")}>
          <div className="icon-placeholder">🤖</div>
          <h2>AI Engineer</h2>
          <p>Learn the fundamentals of AI, neural networks, and advanced deep learning.</p>
        </div>

        <div className="path-card" onClick={() => navigate("/learning/ml")}>
          <div className="icon-placeholder">📊</div>
          <h2>ML Engineer</h2>
          <p>Master machine learning algorithms, data science, and predictive modeling.</p>
        </div>

        <div className="path-card" onClick={() => navigate("/learning/software")}>
          <div className="icon-placeholder">💻</div>
          <h2>Software Engineer</h2>
          <p>Build scalable applications, write clean code, and learn software design.</p>
        </div>
      </div>
    </div>
  );
};

export default Learning;
