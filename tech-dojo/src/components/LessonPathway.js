import React from "react";
import "./LessonPathway.css";

const LessonPathway = ({ difficulty }) => {
  // Custom pathways for each difficulty level
  const pathways = {
    beginner: [
      { id: 1, status: "unlocked" },
      { id: 2, status: "locked" },
      { id: 3, status: "locked" },
    ],
    intermediate: [
      { id: 1, status: "unlocked" },
      { id: 2, status: "unlocked" },
      { id: 3, status: "locked" },
      { id: 4, status: "locked" },
    ],
    advanced: [
      { id: 1, status: "unlocked" },
      { id: 2, status: "unlocked" },
      { id: 3, status: "unlocked" },
      { id: 4, status: "unlocked" },
      { id: 5, status: "locked" },
    ],
  };

  const lessons = pathways[difficulty];

  return (
    <div className="lesson-container">
      <div className="unit-box">
        <h2>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Lessons</h2>
        <p>Customize AI learning based on experience level.</p>
        <button className="continue-btn">Continue</button>
      </div>

      <div className="lesson-pathway">
        {lessons.map((lesson, index) => (
          <div
            key={lesson.id}
            className={`lesson-circle ${lesson.status}`}
            style={{
              top: `${index * 80 + 20}px`,
              left: index % 2 === 0 ? "0px" : "50px",
            }}
          >
            {lesson.status === "unlocked" ? "★" : "★"}
            {lesson.id === 1 && <div className="start-label">START</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonPathway;
