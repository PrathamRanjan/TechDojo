import React from "react";
import { useNavigate } from "react-router-dom";
import "./MLEngineer.css";

const MLEngineer = () => {
  const navigate = useNavigate();

  return (
    <div className="ai-engineer-container">
      <h1 className="welcome-message">Welcome to ML Engineer Path</h1>
      <h2 className="choose-difficulty">Choose a Difficulty</h2>

      <div className="difficulty-selection">
        <button className="difficulty-button" onClick={() => navigate("/learning/ml/beginner")}>
          Beginner
        </button>
        <button className="difficulty-button" onClick={() => navigate("/learning/ml/intermediate")}>
          Intermediate
        </button>
        <button className="difficulty-button" onClick={() => navigate("/learning/ml/advanced")}>
          Advanced
        </button>
      </div>
    </div>
  );
};

export default MLEngineer;
