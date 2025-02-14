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
        marginBottom: "650px" // Keeping space below the header
      }}>
        🤖 Building a Chatbot - AI-Powered Conversational Agents
      </h1>

      <p style={{ 
        textAlign: "center", 
        color: "#333", 
        fontSize: "25px", 
        marginBottom: "30px" // Space below the subheader
      }}>
        🛠️ Learn How to Build an AI Chatbot from Scratch
      </p>

      {/* Scrollable Embedded Vercel Website (AI Engineer) */}
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
          title="AI Chatbot Development - Tech Dojo"
        ></iframe>
      </div>

      {/* How Chatbots Work */}
      <h2 style={{ color: "#222", marginBottom: "10px" }}>
        ⚙️ How Does a Chatbot Work?
      </h2>
      <ul style={{ 
        backgroundColor: "#f9f9f9", 
        padding: "15px", 
        borderRadius: "8px", 
        lineHeight: "1.6" 
      }}>
        <li>💬 **Natural Language Processing (NLP):** The chatbot understands user queries.</li>
        <li>🤖 **AI Model Training:** Uses large datasets to improve responses.</li>
        <li>🔄 **Conversational Flow:** Handles user interactions with context.</li>
        <li>📡 **Integration with APIs:** Connects with external services for better functionality.</li>
      </ul>

      {/* Steps to Build a Chatbot */}
      <h2 style={{ color: "#222", marginTop: "30px", marginBottom: "10px" }}>
        🛠️ Steps to Build Your Own AI Chatbot
      </h2>
      <ul style={{ 
        backgroundColor: "#f1f1f1", 
        padding: "15px", 
        borderRadius: "8px", 
        lineHeight: "1.6" 
      }}>
        <li>📌 **Step 1:** Define the chatbot’s purpose and target audience.</li>
        <li>📌 **Step 2:** Choose an NLP framework (e.g., OpenAI GPT, Dialogflow, Rasa).</li>
        <li>📌 **Step 3:** Train the model using high-quality conversational data.</li>
        <li>📌 **Step 4:** Integrate APIs to enhance chatbot capabilities.</li>
        <li>📌 **Step 5:** Deploy and continuously improve using user feedback.</li>
      </ul>

      {/* Chatbot Use Cases */}
      <h2 style={{ color: "#222", marginTop: "30px", marginBottom: "10px" }}>
        🌍 Real-World Applications of Chatbots
      </h2>
      <ul style={{ 
        backgroundColor: "#f9f9f9", 
        padding: "15px", 
        borderRadius: "8px", 
        lineHeight: "1.6" 
      }}>
        <li>💼 **Customer Support** - AI chatbots handle customer inquiries 24/7.</li>
        <li>🛍️ **E-commerce Assistants** - Recommends products based on user preferences.</li>
        <li>📚 **Education & Learning** - AI tutors answer student questions in real-time.</li>
        <li>🏥 **Healthcare Bots** - Helps with symptom checking and appointment scheduling.</li>
      </ul>
    </div>
  );
};

export default Project;
