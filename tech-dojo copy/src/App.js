import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import Games from "./pages/Games";
import Classroom from "./pages/Classroom";
import Auth from "./components/Auth";

// ✅ Learning Paths
import AIEngineer from "./pages/AIEngineer";
import AIBeginner from "./pages/AIpages/AIBeginner";
import AIIntermediate from "./pages/AIpages/AIIntermediate";
import AIAdvanced from "./pages/AIpages/AIAdvanced";

import MLEngineer from "./pages/MLEngineer";
import SoftwareEngineer from "./pages/SoftwareEngineer";

// ✅ AI Beginner Content Pages (Ensure Default Exports)
import WhatIsAI from "./pages/AIpages/AIBContent/WhatIsAI";
import Revision from "./pages/AIpages/AIBContent/Revision";
import BiasInAI from "./pages/AIpages/AIBContent/BiasInAI";
import PromptEngineering from "./pages/AIpages/AIBContent/PromptEngineering";
import Project from "./pages/AIpages/AIBContent/Project";

const App = () => {
  // 🌟 Keep track of active lesson
  const [activeLesson, setActiveLesson] = useState("");

  return (
    <Router>
      <Header /> {/* ✅ Header appears on all pages */}
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/learning" element={<Learning />} />

        {/* ✅ AI Engineer Paths */}
        <Route path="/learning/ai" element={<AIEngineer />} />
        <Route path="/learning/ai/beginner" element={<AIBeginner setActiveLesson={setActiveLesson} />} />
        <Route path="/learning/ai/intermediate" element={<AIIntermediate />} />
        <Route path="/learning/ai/advanced" element={<AIAdvanced />} />

        {/* ✅ AI Beginner Content Pages */}
        <Route path="/learning/ai/beginner/whatisai" element={<WhatIsAI setActiveLesson={setActiveLesson} />} />
        <Route path="/learning/ai/beginner/revision" element={<Revision setActiveLesson={setActiveLesson} />} />
        <Route path="/learning/ai/beginner/biasinai" element={<BiasInAI setActiveLesson={setActiveLesson} />} />
        <Route path="/learning/ai/beginner/promptengineering" element={<PromptEngineering setActiveLesson={setActiveLesson} />} />
        <Route path="/learning/ai/beginner/project" element={<Project setActiveLesson={setActiveLesson} />} />

        {/* ✅ Other Learning Paths */}
        <Route path="/learning/ml" element={<MLEngineer />} />
        <Route path="/learning/software" element={<SoftwareEngineer />} />

        <Route path="/games" element={<Games />} />
        <Route path="/classroom" element={<Classroom />} />
      </Routes>
    </Router>
  );
};

export default App;
