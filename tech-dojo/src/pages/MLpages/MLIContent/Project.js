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
        🕷️ Web Scraping - Automating Data Extraction
      </h1>

      <p style={{ 
        textAlign: "center", 
        color: "#333", 
        fontSize: "25px", 
        marginBottom: "30px" 
      }}>
        🖥️ Learn How to Extract Data from Websites Using Web Scraping
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
          title="Web Scraping - Tech Dojo"
        ></iframe>
      </div>

      {/* Web Scraping Guide */}
      <h2 style={{ color: "#222", marginBottom: "10px" }}>
        🕷️ Key Steps in Web Scraping
      </h2>
      <ul style={{ 
        backgroundColor: "#f9f9f9", 
        padding: "15px", 
        borderRadius: "8px", 
        lineHeight: "1.6" 
      }}>
        <li>🌍 Identify the website and data you want to scrape.</li>
        <li>🛠️ Use libraries like BeautifulSoup, Scrapy, or Selenium.</li>
        <li>⚠️ Respect the site's **robots.txt** file and avoid scraping restricted data.</li>
        <li>💾 Store data efficiently in CSV, JSON, or a database.</li>
      </ul>
    </div>
  );
};

export default Project;
