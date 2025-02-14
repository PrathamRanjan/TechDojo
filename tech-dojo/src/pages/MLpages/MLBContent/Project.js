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
        📊 Data Visualization - Transforming Raw Data into Insights
      </h1>

      <p style={{ 
        textAlign: "center", 
        color: "#333", 
        fontSize: "25px", 
        marginBottom: "30px" 
      }}>
        🖥️ Learn the Power of Data Visualization
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
          title="Data Visualization - Tech Dojo"
        ></iframe>
      </div>

      {/* How to Visualize Data Effectively */}
      <h2 style={{ color: "#222", marginBottom: "10px" }}>
        📊 Best Practices in Data Visualization
      </h2>
      <ul style={{ 
        backgroundColor: "#f9f9f9", 
        padding: "15px", 
        borderRadius: "8px", 
        lineHeight: "1.6" 
      }}>
        <li>📌 Use the right chart type for your data (e.g., bar, line, scatter).</li>
        <li>🎨 Keep visualizations simple and avoid clutter.</li>
        <li>📈 Use consistent color schemes for readability.</li>
        <li>🔍 Label axes, legends, and titles clearly.</li>
      </ul>
    </div>
  );
};

export default Project;
