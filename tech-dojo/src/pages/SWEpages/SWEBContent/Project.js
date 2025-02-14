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
        🧮 Building a Calculator - Mastering Control Flow
      </h1>

      <p style={{ 
        textAlign: "center", 
        color: "#333", 
        fontSize: "25px", 
        marginBottom: "30px" 
      }}>
        🛠️ Learn How to Build a Functional Calculator Using Control Flow
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
          title="Calculator App - Tech Dojo"
        ></iframe>
      </div>

      {/* Steps to Build a Calculator */}
      <h2 style={{ color: "#222", marginBottom: "10px" }}>
        🏗️ Steps to Create a Simple Calculator
      </h2>
      <ul style={{ 
        backgroundColor: "#f9f9f9", 
        padding: "15px", 
        borderRadius: "8px", 
        lineHeight: "1.6" 
      }}>
        <li>📌 **Step 1:** Define the calculator operations (addition, subtraction, multiplication, division).</li>
        <li>📌 **Step 2:** Use **if-else conditions** or a **switch case** to handle operations.</li>
        <li>📌 **Step 3:** Get user input using **prompt()** or an HTML form.</li>
        <li>📌 **Step 4:** Display the results dynamically.</li>
      </ul>
    </div>
  );
};

export default Project;
