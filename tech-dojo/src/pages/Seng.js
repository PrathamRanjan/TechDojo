import React from "react";
import { useNavigate } from "react-router-dom";
import "./Seng.css";

const SoftwareEngineer = () => {
  const navigate = useNavigate();

  return (
    <div className="ai-engineer-container">
      <h1 className="welcome-message">Welcome to Software Engineer Path</h1>
      <h2 className="choose-difficulty">Choose a Difficulty</h2>

      <div className="difficulty-selection">
        <button className="difficulty-button" onClick={() => navigate("/learning/swe/beginner")}>
          Beginner
        </button>
        <button className="difficulty-button" onClick={() => navigate("/learning/swe/intermediate")}>
          Intermediate
        </button>
        <button className="difficulty-button" onClick={() => navigate("/learning/swe/advanced")}>
          Advanced
        </button>
      </div>
    </div>
  );
};

export default SoftwareEngineer;
