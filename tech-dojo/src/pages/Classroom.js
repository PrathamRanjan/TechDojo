import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // ✅ Import Sidebar
import "./Classroom.css";

const Classroom = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("leaderboard");

  return (
    <div className="classroom-layout">
      <Sidebar /> {/* ✅ Sidebar now appears on all classroom subpages */}
      <div className="content">
        {activePage === "leaderboard" && (
          <div className="leaderboard">
            <h2>🏆 Leaderboard</h2>
            <p>🚀 Coming soon...</p>
          </div>
        )}
        {activePage === "teacherbot" && (
          <div className="teacherbot">
            <h2>🤖 TeacherBot</h2>
            <p>🚀 Coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Classroom;
