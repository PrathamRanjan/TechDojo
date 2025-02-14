import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2>Classroom</h2>
      <ul>
        <li onClick={() => navigate("/classroom/leaderboard")}>🏆 Leaderboard</li>
        <li onClick={() => navigate("/classroom/discussion")}>💬 Discussion</li>
        <li onClick={() => navigate("/classroom/teacherbot")}>🤖 TeacherBot</li>
      </ul>
    </div>
  );
};

export default Sidebar;
