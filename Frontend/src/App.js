import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Courses from './components/Courses';
import Materials from './components/Materials';
import Registration from './components/Registration';
import Projects from './components/Projects';
import JobPortal from './components/JobPortal';
import Contact from './components/Contact';
import CommunityChat from './components/CommunityChat'; // New Component
import Home from './components/Home'; // New Component

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/job-portal" element={<JobPortal />} />
          <Route path="/community-chat" element={<CommunityChat />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

