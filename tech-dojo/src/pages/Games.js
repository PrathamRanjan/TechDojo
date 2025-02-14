import React from "react";

const Games = () => {
  return (
    <div style={{ padding: "40px", fontFamily: "Poppins, sans-serif", textAlign: "center", maxWidth: "1400px", margin: "0 auto" }}>
      <h1 style={{ color: "#333", marginBottom: "20px", fontSize: "36px" }}>🎮 Games</h1>
      <p style={{ fontSize: "20px", color: "#555", marginBottom: "40px" }}>
        Welcome to the Games page! Play these interactive games and test your skills.
      </p>

      {/* Games Container - Flex Row Layout */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between",  // Ensures even spacing between the games
        alignItems: "center",
        gap: "40px", 
        flexWrap: "nowrap",  // Ensures they stay side by side
        width: "100%"
      }}>
        {/* Digital Safety Quiz Game */}
        <div style={{ 
          width: "65%",  // Increased width to take up more space
          height: "400px", // Shorter height
          border: "3px solid #ccc", 
          borderRadius: "12px", 
          overflow: "hidden", 
          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
          backgroundColor: "#f9f9f9"
        }}>
          <h2 style={{ fontSize: "22px", color: "#222", padding: "10px", margin: "0" }}>
            🛡️ Digital Safety Quiz
          </h2>
          <iframe
            src="https://digital-safety-quiz-rain2g3lu-susannabombays-projects.vercel.app/"
            width="100%"
            height="350px"  // Matches new height
            style={{ border: "none", overflow: "hidden", borderRadius: "0 0 12px 12px" }}
            title="Digital Safety Quiz Game"
          ></iframe>
        </div>

        {/* Password Game */}
        <div style={{ 
          width: "65%",  // Increased width to take up more space
          height: "400px", // Shorter height
          border: "3px solid #ccc", 
          borderRadius: "12px", 
          overflow: "hidden", 
          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
          backgroundColor: "#f9f9f9"
        }}>
          <h2 style={{ fontSize: "22px", color: "#222", padding: "10px", margin: "0" }}>
            🔐 Password Game
          </h2>
          <iframe
            src="https://password-game-gcraii5ju-susannabombays-projects.vercel.app/"
            width="100%"
            height="350px"  // Matches new height
            style={{ border: "none", overflow: "hidden", borderRadius: "0 0 12px 12px" }}
            title="Password Game"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Games;
