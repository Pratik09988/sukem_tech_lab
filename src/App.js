import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AIChatbot from "./components/AIChatbot";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import OurTeam from "./pages/OurTeam";
import Project from "./pages/Project";
import Career from "./pages/Career";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <AIChatbot />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/project" element={<Project />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;