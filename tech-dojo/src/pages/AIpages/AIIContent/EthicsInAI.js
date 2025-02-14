import React from "react";

const EthicsInAI = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "'Poppins', sans-serif" }}>
      <h1>🧠 Bias in AI</h1>
      <p style={{ fontSize: "18px", maxWidth: "800px", margin: "0 auto" }}>
        Artificial Intelligence (AI) is amazing, but it's not perfect! 🤖
        Sometimes, AI models **inherit biases** from the data they are trained on. This means they
        can make unfair or incorrect decisions based on **race, gender, age, or background**.  
        Watch the video below to learn more! 👇
      </p>

      {/* ✅ Embedded YouTube Video */}
      <div style={{ marginTop: "20px" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_5JIV8THYCI"
          title="Bias in AI - Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p style={{ marginTop: "20px", fontSize: "16px" }}>
        **What can we do?** 🛠️  
        - Use **diverse datasets** 📊  
        - Audit AI decisions regularly 🔍  
        - Be mindful of **how AI is trained** 🤔  
      </p>
    </div>
  );
};

export default EthicsInAI;
