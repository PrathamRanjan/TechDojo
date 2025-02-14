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
import SoftwareEngineer from "./pages/Seng.js";

// ✅ AI Beginner Content Pages
import WhatIsAI from "./pages/AIpages/AIBContent/WhatIsAI";
import Revision from "./pages/AIpages/AIBContent/Revision";
import BiasInAI from "./pages/AIpages/AIBContent/BiasInAI";
import PromptEngineering from "./pages/AIpages/AIBContent/PromptEngineering";
import Project from "./pages/AIpages/AIBContent/Project";

import WhatIsAI2 from "./pages/AIpages/AIIContent/WhatIsAI";
import Revision2 from "./pages/AIpages/AIIContent/Revision";
import EthicsInAI from "./pages/AIpages/AIIContent/EthicsInAI";
import Sentiment from "./pages/AIpages/AIIContent/Sentiment";
import Project2 from "./pages/AIpages/AIIContent/Project";

import WhatIsAI3 from "./pages/AIpages/AIDContent/WhatIsAI";
import Revision3 from "./pages/AIpages/AIDContent/Revision";
import Secure from "./pages/AIpages/AIDContent/SecureAI";
import Chat from "./pages/AIpages/AIDContent/Chat";
import Project3 from "./pages/AIpages/AIDContent/Project";


import WhatIsML from "./pages/MLpages/MLBContent/WhatisML.js";
import Revision4 from "./pages/MLpages/MLBContent/Revision";
import DataQuality from "./pages/MLpages/MLBContent/DataQuality";
import DataVisualizaton from "./pages/MLpages/MLBContent/DataVis";
import Project4 from "./pages/MLpages/MLBContent/Project";

import WhatIsML2 from "./pages/MLpages/MLIContent/WhatisML.js";
import Revision5 from "./pages/MLpages/MLIContent/Revision";
import News from "./pages/MLpages/MLIContent/News.js";
import WS from "./pages/MLpages/MLIContent/WebScrape.js";
import Project5 from "./pages/MLpages/MLIContent/Project";

import WhatIsML3 from "./pages/MLpages/MLDContent/WhatisML.js";
import Revision6 from "./pages/MLpages/MLDContent/Revision";
import CS from "./pages/MLpages/MLDContent/CS.js";
import Bully from "./pages/MLpages/MLDContent/Bully.js";
import Project6 from "./pages/MLpages/MLDContent/Project";

import Discussion from "./components/Discussion";
import Profile from "./pages/Profile";
import MLBeginner from "./pages/MLpages/MLBeginner.js";
import MLIntermediate from "./pages/MLpages/MLIntermediate.js";
import MLAdvanced from "./pages/MLpages/MLAdvanced.js";

import SWEBeginner from "./pages/SWEpages/SWEBeginner.js";
import SWEIntermediate from "./pages/SWEpages/SWEIntermediate.js";
import SWEAdvanced from "./pages/SWEpages/SWEAdvanced.js";

import WhatisSWE from "./pages/SWEpages/SWEBContent/WhatisSWE.js";
import Revision7 from "./pages/SWEpages/SWEBContent/Revision.js";
import Resp from "./pages/SWEpages/SWEBContent/Resp.js";
import Calc from "./pages/SWEpages/SWEBContent/Calc.js";
import Project7 from "./pages/SWEpages/SWEBContent/Project.js";

import WhatisSWE2 from "./pages/SWEpages/SWEIContent/WhatisSWE.js";
import Revision8 from "./pages/SWEpages/SWEIContent/Revision.js";
import Safety1 from "./pages/SWEpages/SWEIContent/Safety1.js";
import API from "./pages/SWEpages/SWEIContent/API.js";
import Project8 from "./pages/SWEpages/SWEIContent/Project.js";

import WhatisSWE3 from "./pages/SWEpages/SWEDContent/WhatisSWE.js";
import Revision9 from "./pages/SWEpages/SWEDContent/Revision.js";
import OOP from "./pages/SWEpages/SWEDContent/OOP.js";
import WEB from "./pages/SWEpages/SWEDContent/WB.js";
import Project9 from "./pages/SWEpages/SWEDContent/Project.js";

const App = () => {
  // 🌟 Keep track of active lesson
  const [activeLesson, setActiveLesson] = useState("");

  return (
    <Router>
      <Routes>
        {/* ✅ Auth Page (No Header) */}
        <Route path="/" element={<Auth />} />
        <Route path="/auth" element={<Auth />} />

        {/* ✅ All Other Pages with Header */}
        <Route
          path="*"
          element={
            <>
              <Header /> {/* ✅ Show Header on all other pages */}
              <Routes>
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

                <Route path="/learning/ai/intermediate/whatisai" element={<WhatIsAI2 setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ai/intermediate/revision" element={<Revision2 setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ai/intermediate/ethicsinai" element={<EthicsInAI setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ai/intermediate/sentiment" element={<Sentiment setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ai/intermediate/project" element={<Project2 setActiveLesson={setActiveLesson} />} />

                <Route path="/learning/ai/adv/whatisai" element={<WhatIsAI3 setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ai/adv/revision" element={<Revision3 setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ai/adv/secure" element={<Secure setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ai/adv/chat" element={<Chat setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ai/adv/project" element={<Project3 setActiveLesson={setActiveLesson} />} />


                <Route path="/learning/ml" element={<MLEngineer />} />
                <Route path="/learning/ml/beginner" element={<MLBeginner setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ml/intermediate" element={<MLIntermediate setActiveLesson={setActiveLesson}  />} />
                <Route path="/learning/ml/advanced" element={<MLAdvanced setActiveLesson={setActiveLesson}/>} />
                <Route path="/learning/ml/beg/what" element={<WhatIsML setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ml/beg/revision" element={<Revision4 setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ml/beg/dataq" element={<DataQuality setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ml/beg/vis" element={<DataVisualizaton setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ml/beg/project" element={<Project4 setActiveLesson={setActiveLesson} />} />

                <Route path="/learning/ml/intermediate/whatisml" element={<WhatIsML2 setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ml/intermediate/revision" element={<Revision5 setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ml/intermediate/news" element={<News setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ml/intermediate/webscrape" element={<WS setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ml/intermediate/project" element={<Project5 setActiveLesson={setActiveLesson} />} />

                <Route path="/learning/ml/adv/what" element={<WhatIsML3 setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ml/adv/revision" element={<Revision6 setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ml/adv/cs" element={<CS setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ml/adv/class" element={<Bully setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/ml/adv/bully" element={<Project6 setActiveLesson={setActiveLesson} />} />



                <Route path="/learning/software" element={<SoftwareEngineer />} />
                <Route path="/learning/swe/beginner" element={<SWEBeginner setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/swe/intermediate" element={<SWEIntermediate setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/swe/advanced" element={<SWEAdvanced setActiveLesson={setActiveLesson} />} />
                
                <Route path="/learning/swe/beginner/what" element={<WhatisSWE setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/swe/beginner/revision" element={<Revision7 setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/swe/beginner/resp" element={<Resp setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/swe/beginner/calc" element={<Calc setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/swe/beginner/project" element={<Project7 setActiveLesson={setActiveLesson} />} />

                <Route path="/learning/swe/intermediate/what" element={<WhatisSWE2 setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/swe/intermediate/revision" element={<Revision8 setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/swe/intermediate/safety" element={<Safety1 setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/swe/intermediate/api" element={<API setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/swe/intermediate/project" element={<Project8 setActiveLesson={setActiveLesson} />} />

                <Route path="/learning/swe/adv/what" element={<WhatisSWE3 setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/swe/adv/revision" element={<Revision9 setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/swe/adv/oop" element={<OOP setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/swe/adv/web" element={<WEB setActiveLesson={setActiveLesson} />} />
                <Route path="/learning/swe/adv/project" element={<Project9 setActiveLesson={setActiveLesson} />} />

                {/* ✅ Other Learning Paths */}
                <Route path="/learning/ml" element={<MLEngineer />} />
                <Route path="/learning/software" element={<SoftwareEngineer />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/games" element={<Games />} />
                <Route path="/classroom" element={<Classroom />} />
                <Route path="/classroom/discussion" element={<Discussion />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
