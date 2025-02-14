const CyberSafety = () => {
  return (
    <div>
      <h1>Cyber Safety & Preventing Cyberbullying</h1>
      <p>
        In today's digital world, online safety is more important than ever. Cyberbullying can have a serious impact on mental health, and it's crucial to take steps to prevent it.
      </p>

      {/* Embedded YouTube Video */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/y4LCyYnUVK8"
          title="Cyber Safety & Cyberbullying Prevention"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h2>What is Cyberbullying?</h2>
      <p>
        Cyberbullying involves using digital platforms to harass, intimidate, or humiliate others. This includes mean messages, spreading false information, impersonation, and threats.
      </p>

      <h2>How to Stay Safe Online</h2>
      <ul>
        <li>Keep personal information private and avoid sharing sensitive details online.</li>
        <li>Use strong passwords and enable two-factor authentication for extra security.</li>
        <li>Think before posting—what you share online stays online.</li>
        <li>Report and block cyberbullies immediately on social media platforms.</li>
      </ul>

      <h2>Preventing Cyberbullying</h2>
      <ul>
        <li>Educate yourself and others about online risks and responsible behavior.</li>
        <li>Encourage positive online interactions and stand against cyberbullying.</li>
        <li>Report harmful content to platform moderators or authorities when necessary.</li>
        <li>Support victims of cyberbullying and promote digital well-being.</li>
      </ul>

      <h2>Resources</h2>
      <p>
        If you or someone you know is a victim of cyberbullying, reach out for help:
      </p>
      <ul>
        <li><a href="https://www.stopbullying.gov/">StopBullying.gov</a></li>
        <li><a href="https://www.cybersmile.org/">Cybersmile Foundation</a></li>
        <li><a href="https://www.netsmartz.org/">NetSmartz</a></li>
      </ul>
    </div>
  );
};

export default CyberSafety;
