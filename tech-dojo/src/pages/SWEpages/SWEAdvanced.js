import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../firebase/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import "./SWEAdvanced.css"; // Ensure this is a separate CSS file for Intermediate

const SWEAdvanced = () => {
  const navigate = useNavigate();
  const [completedLessons, setCompletedLessons] = useState({});
  
  const user = auth.currentUser;
  const userProgressRef = user ? doc(db, "userProgress", `${user.uid}_MLadvanced`) : null; // 🔹 Unique progress for Intermediate

  // 🔹 Load user progress from Firebase
  useEffect(() => {
    const fetchProgress = async () => {
      if (!userProgressRef) return;
      const docSnap = await getDoc(userProgressRef);
      if (docSnap.exists()) {
        setCompletedLessons(docSnap.data());
      }
    };
    fetchProgress();
  }, [userProgressRef]);

  // 🔹 Lessons Array with Zigzag Layout
  const lessons = [
    { id: "whatIsSWE", title: "What is SWE", link: "/learning/swe/adv/what", icon: "⭐", position: "left" },
    { id: "revision", title: "Revision", link: "/learning/swe/adv/revision", icon: "❓", position: "right" },
    { id: "oop", title: "Object-Oriented Programming", link: "/learning/swe/adv/oop", icon: "⭐", position: "left" },
    { id: "web", title: "Web Development", link: "/learning/swe/adv/web", icon: "⭐", position: "right" },
    { id: "project", title: "Final Project", link: "/learning/swe/adv/project", icon: "🛠️", position: "left" }, // 🔹 Project Emoji
  ];
  
  // 🔹 Handle Lesson Click
  const handleLessonClick = async (lessonId, link) => {
    const updatedLessons = { ...completedLessons, [lessonId]: true };
    setCompletedLessons(updatedLessons);

    if (userProgressRef) {
      await setDoc(userProgressRef, updatedLessons, { merge: true });
    }

    navigate(link);
  };

  return (
    <div className="ai-difficult-container">
      <h1 className="difficult-title">Difficult ML Roadmap</h1>
      <div className="lesson-pathway">
        
        {/* 🔹 Floating START Label Above First Button */}
        <div className="start-label">START</div>

        {/* ACTUAL LESSONS */}
        {lessons.map((lesson, index) => (
          <div key={lesson.id} className={`lesson-wrapper ${lesson.position}`}>
            <button
              className={`lesson-circle ${completedLessons[lesson.id] ? "active" : ""}`}
              onClick={() => handleLessonClick(lesson.id, lesson.link)}
              disabled={index > 0 && !completedLessons[lessons[index - 1].id] && !completedLessons[lesson.id]}
            >
              {lesson.icon}
            </button>
            <span className="lesson-text">{lesson.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SWEAdvanced;
