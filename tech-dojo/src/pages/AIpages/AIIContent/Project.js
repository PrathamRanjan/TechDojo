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
        marginBottom: "450px" // Keeping space below the header
      }}>
        📊 Sentiment Classifier - Analyzing Text Sentiments
      </h1>

      <p style={{ 
        textAlign: "center", 
        color: "#333", 
        fontSize: "25px", 
        marginBottom: "30px" // Space below the subheader
      }}>
        📝 Sentiment Classifier - Understanding Emotions in Text
      </p>

      {/* Scrollable Embedded Vercel Website (Sentiment Classifier) */}
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
          src="https://tech-dojo-final.vercel.app/ai-engineer"
          width="100%"
          height="100%"
          style={{ 
            border: "none", 
            overflowY: "auto",
            borderRadius: "8px"
          }}
          title="Sentiment Classifier - Tech Dojo"
        ></iframe>
      </div>

      {/* How Sentiment Analysis Works */}
      <h2 style={{ color: "#222", marginBottom: "10px" }}>
        ⚙️ How Does Sentiment Analysis Work?
      </h2>
      <ul style={{ 
        backgroundColor: "#f9f9f9", 
        padding: "15px", 
        borderRadius: "8px", 
        lineHeight: "1.6" 
      }}>
        <li>🧠 **Natural Language Processing (NLP)** - AI processes human language.</li>
        <li>📊 **Text Preprocessing** - Tokenization, stopword removal, and stemming.</li>
        <li>🎯 **Sentiment Scoring** - Each sentence is classified as **positive**, **negative**, or **neutral**.</li>
        <li>📈 **Model Training** - Uses labeled datasets to improve accuracy.</li>
      </ul>

      {/* Applications of Sentiment Analysis */}
      <h2 style={{ color: "#222", marginTop: "30px", marginBottom: "10px" }}>
        🚀 Applications of Sentiment Analysis
      </h2>
      <ul style={{ 
        backgroundColor: "#f1f1f1", 
        padding: "15px", 
        borderRadius: "8px", 
        lineHeight: "1.6" 
      }}>
        <li>📢 **Brand Monitoring** - Understand customer opinions from social media.</li>
        <li>🛍️ **Product Reviews** - Analyze sentiment in e-commerce feedback.</li>
        <li>📡 **Political & Social Trends** - Gauge public reactions to events.</li>
        <li>🎥 **Movie & Media Reviews** - Determine audience sentiment towards content.</li>
      </ul>
    </div>
  );
};

export default Project;
