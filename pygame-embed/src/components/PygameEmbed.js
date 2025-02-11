import React from "react";

const PygameEmbed = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Embedded Pygame</h1>
      <iframe
        src="http://localhost:8000"  // Change this if hosting externally
        width="800"
        height="600"
        title="Pygame"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default PygameEmbed;

