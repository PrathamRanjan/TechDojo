import React from "react";
import { useNavigate } from "react-router-dom";
import "./AIEngineer.css";

const AIEngineer = () => {
  const navigate = useNavigate();

  return (
    <div className="ai-engineer-container">
      <h1 className="welcome-message">Welcome to AI Engineer Path</h1>
      <h2 className="choose-difficulty">Choose a Difficulty</h2>

      <div className="difficulty-selection">
        <button className="difficulty-button" onClick={() => navigate("/learning/ai/beginner")}>
          Beginner
        </button>
        <button className="difficulty-button" onClick={() => navigate("/learning/ai/intermediate")}>
          Intermediate
        </button>
        <button className="difficulty-button" onClick={() => navigate("/learning/ai/advanced")}>
          Advanced
        </button>
      </div>
    </div>
  );
};

export default AIEngineer;
