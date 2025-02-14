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
        🔄 Fetching Data from an API - Powering Your Apps with Real-Time Data
      </h1>

      <p style={{ 
        textAlign: "center", 
        color: "#333", 
        fontSize: "25px", 
        marginBottom: "30px" 
      }}>
        🌍 Learn How to Use APIs to Fetch and Display Data Dynamically
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
          title="API Fetching - Tech Dojo"
        ></iframe>
      </div>

      {/* Steps to Use an API */}
      <h2 style={{ color: "#222", marginBottom: "10px" }}>
        🔄 Steps to Fetch Data from an API
      </h2>
      <ul style={{ 
        backgroundColor: "#f9f9f9", 
        padding: "15px", 
        borderRadius: "8px", 
        lineHeight: "1.6" 
      }}>
        <li>📌 **Step 1:** Find a free API (e.g., OpenWeather, CoinGecko, NewsAPI).</li>
        <li>📌 **Step 2:** Use **fetch()** or **Axios** to request data.</li>
        <li>📌 **Step 3:** Process the JSON response and extract relevant information.</li>
        <li>📌 **Step 4:** Display the data dynamically on the webpage.</li>
      </ul>
    </div>
  );
};

export default Project;
