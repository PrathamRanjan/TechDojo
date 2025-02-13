import { useState } from "react";
import "./styles.css"; // Ensure styles are linked

export default function DigitalSafetyQuiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null); // Stores correct answer when wrong

  const questions = [
    {
      paragraph: "You receive an email from an unknown sender claiming you've won a prize. What should you do?",
      options: [
        "Reply with your details.",
        "Ignore and report it as spam.",
        "Click the link to claim.",
        "Forward it to friends."
      ],
      correct: 1
    },
    {
      paragraph: "What is a strong indicator that an email might be a phishing attempt?",
      options: [
        "The email is from a known contact.",
        "The email asks for personal information and has urgent language.",
        "The email contains a lot of grammar mistakes.",
        "The email has an attachment labeled 'important'."
      ],
      correct: 1
    },
    {
      paragraph: "What is two-factor authentication (2FA)?",
      options: [
        "Using two different accounts to log in.",
        "A second step of verification like a code sent to your phone.",
        "A way to bypass a password if you forget it.",
        "Encrypting your password before submitting it."
      ],
      correct: 1
    },
    {
      paragraph: "Which of the following is a safe practice when using public Wi-Fi?",
      options: [
        "Always connect to public Wi-Fi without a password for convenience.",
        "Use a VPN (Virtual Private Network) to encrypt your internet traffic.",
        "Disable your firewall when using public networks.",
        "Only visit HTTP websites to speed up browsing."
      ],
      correct: 1
    },
    {
      paragraph: "What does HTTPS indicate when seen in a URL?",
      options: [
        "The website is secure and uses encryption.",
        "The website is hosted by a government agency.",
        "The website is faster than HTTP sites.",
        "The website does not track your activity."
      ],
      correct: 0
    }
  ];

  const handleAnswer = (index) => {
    const isCorrect = index === questions[questionIndex].correct;
    
    if (isCorrect) {
      setScore(score + 1);
      setFeedback("✅ Correct!");
      setCorrectAnswer(null);
    } else {
      setFeedback("❌ Wrong!");
      setCorrectAnswer(`✔️ The correct answer is: ${questions[questionIndex].options[questions[questionIndex].correct]}`);
    }

    // Wait for 2 seconds before moving to the next question
    setTimeout(() => {
      setFeedback(null);
      setCorrectAnswer(null);
      if (questionIndex + 1 < questions.length) {
        setQuestionIndex(questionIndex + 1);
      } else {
        setGameOver(true);
      }
    }, 2000);
  };

  const resetGame = () => {
    setQuestionIndex(0);
    setScore(0);
    setGameOver(false);
    setFeedback(null);
    setCorrectAnswer(null);
  };

  return (
    <div className="container">
      <div className="quiz-box">
        <h1 className="title">Digital Safety Quiz</h1>
        {!gameOver ? (
          <>
            <p className="question">{questions[questionIndex].paragraph}</p>
            <div className="options">
              {questions[questionIndex].options.map((option, index) => (
                <div key={index} className="option-container">
                  <button className="option" onClick={() => handleAnswer(index)}>
                    {option}
                  </button>
                </div>
              ))}
            </div>
            {feedback && <p className="feedback">{feedback}</p>}
            {correctAnswer && <p className="correct-answer">{correctAnswer}</p>}
          </>
        ) : (
          <div className="game-over-section">
            <p className="game-over">Game Over! Your Score: {score} / {questions.length}</p>
            <button className="play-again" onClick={resetGame}>Play Again</button>
          </div>
        )}
      </div>
    </div>
  );
}


