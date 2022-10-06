import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Discover from "./components/Discover/Discover";
import Join from "./components/Join/Join";

const App = () => {
  return (
  
      <Router>
        <div>
          <Navbar />
          <Routes>

            <Route path="/" element={<HeroSection />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </div>
      </Router>
   
  );
};

export default App;
