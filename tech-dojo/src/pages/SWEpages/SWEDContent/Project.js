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
        🌐 Building a Web App with Streamlit - Simplified Web Development
      </h1>

      <p style={{ 
        textAlign: "center", 
        color: "#333", 
        fontSize: "25px", 
        marginBottom: "30px" 
      }}>
        🏗️ Learn How to Build and Deploy Interactive Web Apps Using Streamlit
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
          src="https://tech-dojo-final-dr2rlxjzx-adityas-projects-000ef4ef.vercel.app/software-engineer"
          width="100%"
          height="100%"
          style={{ border: "none", overflowY: "auto", borderRadius: "8px" }}
          title="Streamlit Web Development - Tech Dojo"
        ></iframe>
      </div>

      {/* Steps to Build a Streamlit App */}
      <h2 style={{ color: "#222", marginBottom: "10px" }}>
        🚀 Steps to Create a Streamlit App
      </h2>
      <ul style={{ 
        backgroundColor: "#f9f9f9", 
        padding: "15px", 
        borderRadius: "8px", 
        lineHeight: "1.6" 
      }}>
        <li>📌 **Step 1:** Install Streamlit using `pip install streamlit`.</li>
        <li>📌 **Step 2:** Create a Python script (`app.py`).</li>
        <li>📌 **Step 3:** Use `st.title()`, `st.write()`, and `st.button()` for interactivity.</li>
        <li>📌 **Step 4:** Run the app with `streamlit run app.py`.</li>
      </ul>
    </div>
  );
};

export default Project;
