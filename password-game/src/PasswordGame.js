import { useState, useEffect } from "react";
import "./styles.css";

export default function PasswordGame() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [activeRules, setActiveRules] = useState([0]); // Show first rule
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);
  const [gameActive, setGameActive] = useState(false);
  const [passwordStrengthMessage, setPasswordStrengthMessage] = useState("");

  const rules = [
    { rule: "Must be at least 8 characters", check: (pwd) => pwd.length >= 8 },
    { rule: "Must contain an uppercase letter", check: (pwd) => /[A-Z]/.test(pwd) },
    { rule: "Must contain a number", check: (pwd) => /[0-9]/.test(pwd) },
    { rule: "Must contain a special character", check: (pwd) => /[!@#$%^&*]/.test(pwd) },
    { rule: `Must contain today's date`, check: (pwd) => pwd.includes(new Date().getDate().toString()) },
    { rule: "Must contain a roman numeral", check: (pwd) => /[IVXLCDM]/.test(pwd) },
    { rule: "Must contain at least 3 vowels", check: (pwd) => (pwd.match(/[aeiouAEIOU]/g) || []).length >= 3 },
    { 
      rule: "Digits in the password should add up to 25", 
      check: (pwd) => {
        const sum = pwd.split('').reduce((acc, char) => acc + (/[0-9]/.test(char) ? parseInt(char, 10) : 0), 0);
        return sum === 25;
      }
    },
    { rule: "Must end with a digit", check: (pwd) => /[0-9]$/.test(pwd) },
  ];

  useEffect(() => {
    if (gameActive && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      const passedRulesCount = rules.filter(rule => rule.check(password)).length;
      if (passedRulesCount >= 3) {
        setPasswordStrengthMessage("This is your strong password!");
      } else {
        setPasswordStrengthMessage("This is not a strong password.");
      }
    }
  }, [gameActive, timer, password]);

  const validatePassword = (pwd) => {
    if (!gameActive) {
      setGameActive(true);
    }
    setPassword(pwd);
    const failedRules = activeRules.filter((idx) => !rules[idx].check(pwd));
    if (failedRules.length === 0) {
      setScore(score + 1);
      setActiveRules([...activeRules, activeRules.length]);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-y-4 border border-gray-300">
        <h1 className="text-2xl font-bold text-center">The Password Game</h1>
        <p className="text-center text-gray-700">Time Left: {timer}s | Score: {score}</p>
        <input 
          type="text" 
          className="border p-3 w-full rounded text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Enter your password..." 
          value={password} 
          onChange={(e) => validatePassword(e.target.value)} 
        />
        <div className="space-y-2">
          {activeRules.map((idx) => (
            <p key={idx} className={rules[idx].check(password) ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
              {rules[idx].rule}
            </p>
          ))}
        </div>
        {timer === 0 && <p className="text-xl font-bold text-red-600 text-center">Game Over! Your Score: {score}</p>}
        {timer === 0 && <p className="text-xl font-bold text-blue-600 text-center">{passwordStrengthMessage}</p>}
      </div>
    </div>
  );
}

