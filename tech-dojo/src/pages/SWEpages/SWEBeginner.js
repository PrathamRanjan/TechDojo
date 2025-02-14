import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../firebase/firebaseConfig";
import { doc, getDoc, setDoc, collection, query, getDocs } from "firebase/firestore";
import "./SWEBeginner.css";

const SWEBeginner = () => {
  const navigate = useNavigate();
  const [completedLessons, setCompletedLessons] = useState({});

  const user = auth.currentUser;
  const userId = user ? user.uid : null;
  const userProgressRef = userId ? collection(db, "userProgress", userId, "completedLessons") : null;

  // 🔹 Load user progress from Firebase
  useEffect(() => {
    const fetchProgress = async () => {
      if (!userProgressRef) return;
      const progressQuery = query(userProgressRef);
      const querySnapshot = await getDocs(progressQuery);
      
      const completed = {};
      querySnapshot.forEach((doc) => {
        completed[doc.id] = true; // ✅ Store lessonId as key
      });

      setCompletedLessons(completed);
    };

    fetchProgress();
  }, [userId]);

  // 🔹 Lessons Array with Zigzag Layout
  const lessons = [
    { id: "what", title: "What is SWE", link: "/learning/swe/beginner/what", icon: "⭐", position: "left" },
    { id: "revision", title: "Revision", link: "/learning/swe/beginner/revision", icon: "❓", position: "right" },
    { id: "dataquality", title: "Responsible AI", link: "/learning/swe/beginner/resp", icon: "⭐", position: "left" },
    { id: "vis", title: "Calculator", link: "/learning/swe/beginner/calc", icon: "⭐", position: "right" },
    { id: "project", title: "Final Project", link: "/learning/swe/beginner/project", icon: "🛠️", position: "left" },
  ];
  

  // 🔹 Handle Lesson Click (Save with UID)
  const handleLessonClick = async (lessonId, link) => {
    if (!userId) return;

    const lessonRef = doc(db, "userProgress", userId, "completedLessons", lessonId);
    const updatedLessons = { ...completedLessons, [lessonId]: true };

    setCompletedLessons(updatedLessons);

    try {
      await setDoc(lessonRef, { completed: true }, { merge: true });
      navigate(link);
    } catch (error) {
      console.error("Error updating lesson progress:", error);
    }
  };

  return (
    <div className="ml-beginner-container">
      <h1 className="beginner-title">Beginner SWE Roadmap</h1>
      <div className="lesson-pathway">
        
        {/* 🔹 Floating START Label Above First Button */}
        <div className="start-label">START</div>

        {/* ACTUAL LESSONS */}
        {lessons.map((lesson, index) => (
          <div key={lesson.id} className={`lesson-wrapper ${lesson.position}`}>
            <button
              className={`lesson-circle ${completedLessons[lesson.id] ? "active" : ""}`}
              onClick={() => handleLessonClick(lesson.id, lesson.link)}
              disabled={index > 0 && !completedLessons[lessons[index - 1].id]} // ✅ Sequential unlocking but allows revisits
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

export default SWEBeginner;
