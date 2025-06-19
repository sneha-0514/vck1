import React, { useState } from "react";
import {Route , BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import CoursesPage from "./Pages/CoursesPage";
import ContactPage from "./Pages/ContactPage";
import AddmisionPage from "./Pages/AddmisionPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";


const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };             
    return(
      <>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sneha Adinath Chougule"
          studentPhotoUrl="/images/sneha.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/aboutpage" element={<AboutPage/>}/>
          <Route path="/coursespage" element={< CoursesPage/>}/>
          <Route path="/contactpage" element={< ContactPage/>}/>
          <Route path="/addmisionpage" element={< AddmisionPage/>}/>
        </Routes>
        <ChatbotComponent/>
      </Router>
      </>
    )
}

export default App