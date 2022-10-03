import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";

const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <HeroSection />
      </Router>
    </>
  );
};

export default App;
