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
        marginBottom: "450px" // Added space below the header
      }}>
        🧠 AI Engineer - Prompt Engineering & Chatbot Testing
      </h1>

      <p style={{ 
        textAlign: "center", 
        color: "#333", 
        fontSize: "25px", 
        marginBottom: "30px" // Added space below the subheader
      }}>
        🧠 AI Engineer Basic Capstone - Prompt Engineering & Chatbot Testing
      </p>

      {/* Scrollable Embedded Vercel Website */}
      <div style={{ 
        width: "100%", 
        height: "500px", 
        overflow: "hidden", 
        border: "2px solid #ccc", 
        borderRadius: "10px", 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        marginBottom: "30px", // Added spacing below the iframe
        padding: "10px"
      }}>
        <iframe
          src="https://tech-dojo-final-dr2rlxjzx-adityas-projects-000ef4ef.vercel.app/ai-engineer"
          width="100%"
          height="100%"
          style={{ 
            border: "none", 
            overflowY: "auto",
            borderRadius: "8px"
          }}
          title="AI Engineer - Tech Dojo"
        ></iframe>
      </div>

      {/* Prompt Engineering Tips */}
      <h2 style={{ 
        color: "#222", 
        marginBottom: "10px" 
      }}>
        📝 How to Write Effective Prompts
      </h2>
      <ul style={{ 
        backgroundColor: "#f9f9f9", 
        padding: "15px", 
        borderRadius: "8px", 
        lineHeight: "1.6" 
      }}>
        <li>🔹 Be specific and clear about what you want the AI to do.</li>
        <li>🔹 Provide context to improve the accuracy of responses.</li>
        <li>🔹 Use structured formatting like bullet points or numbered lists.</li>
        <li>🔹 Experiment with different wording and observe variations in responses.</li>
      </ul>

      {/* Chatbot Testing Guide */}
      <h2 style={{ 
        color: "#222", 
        marginTop: "30px", // Added spacing before this section
        marginBottom: "10px" 
      }}>
        💡 Chatbot Testing Guide
      </h2>
      <ul style={{ 
        backgroundColor: "#f1f1f1", 
        padding: "15px", 
        borderRadius: "8px", 
        lineHeight: "1.6" 
      }}>
        <li>💬 Input different types of queries and analyze responses.</li>
        <li>🧠 Test logical reasoning and factual accuracy.</li>
        <li>⚡ Optimize prompts for better results.</li>
      </ul>
    </div>
  );
};

export default Project;
