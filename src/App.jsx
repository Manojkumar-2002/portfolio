import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./assets/particlesjs-config.json";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import './App.css'
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Resume from "./components/Resume";
import Home from "./components/Home";
import Navbar from './components/inc/Navbar'


function MyHome() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
      </div></>
  );
}

const App = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="App">
      <div className="particles-container">
        <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />
      </div>
      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<MyHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

