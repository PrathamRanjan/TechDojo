const Project = () => {
  return (
    <div style={{ 
      maxWidth: "900px", 
      margin: "0 auto", 
      padding: "40px 20px", 
      fontFamily: "'Poppins', sans-serif" 
    }}>
      {/* Header Section */}
      <h1 style={{ 
        textAlign: "center", 
        color: "#333", 
        marginBottom: "450px" 
      }}>
        🚨 Cyberbullying Classification - Detecting Online Harassment
      </h1>

      <p style={{ 
        textAlign: "center", 
        color: "#333", 
        fontSize: "25px", 
        marginBottom: "30px" 
      }}>
        🔍 Using AI to Identify and Prevent Cyberbullying
      </p>

      {/* Scrollable Embedded Vercel Website */}
      <div style={{ 
        width: "100%", 
        height: "500px", 
        overflow: "hidden", 
        border: "2px solid #ccc", 
        borderRadius: "10px", 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        marginBottom: "30px", 
        padding: "10px"
      }}>
        <iframe
          src="https://tech-dojo-final-dr2rlxjzx-adityas-projects-000ef4ef.vercel.app/machine-learning"
          width="100%"
          height="100%"
          style={{ border: "none", overflowY: "auto", borderRadius: "8px" }}
          title="Cyberbullying Classification - Tech Dojo"
        ></iframe>
      </div>

      {/* How AI Detects Cyberbullying */}
      <h2 style={{ color: "#222", marginBottom: "10px" }}>
        🔍 How AI Detects Cyberbullying
      </h2>
      <ul style={{ 
        backgroundColor: "#f9f9f9", 
        padding: "15px", 
        borderRadius: "8px", 
        lineHeight: "1.6" 
      }}>
        <li>📜 Uses **NLP** to analyze text messages and comments.</li>
        <li>📊 Classifies messages as **harassment, hate speech, or safe.**</li>
        <li>⚠️ Flags offensive content for **review or moderation.**</li>
        <li>💡 Helps create a **safer online environment.**</li>
      </ul>
    </div>
  );
};

export default Project;
