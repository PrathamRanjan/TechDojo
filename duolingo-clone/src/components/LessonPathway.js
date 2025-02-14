import React from "react";
import "./LessonPathway.css";

const LessonPathway = () => {
  const lessons = [
    { id: 1, status: "unlocked" },
    { id: 2, status: "locked" },
    { id: 3, status: "locked" },
    { id: 4, status: "locked" },
    { id: 5, status: "locked" },
  ];

  return (
    <div className="lesson-container">
      <div className="unit-box">
        <h2>Unit 1</h2>
        <p>Learn the basics of Spanish</p>
        <button className="continue-btn">Continue</button>
      </div>

      <div className="lesson-pathway">
        {lessons.map((lesson, index) => (
          <div
            key={lesson.id}
            className={`lesson-circle ${lesson.status}`}
            style={{ top: `${index * 80 + 20}px`, left: index % 2 === 0 ? "0px" : "50px" }}
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

