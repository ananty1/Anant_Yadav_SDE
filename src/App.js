import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

import Skills from './Pages/Skill';
import Projects from './Pages/Project';
import Experience from './Pages/Experience';
import Education from './Pages/Education';
import Contact from './Pages/Contact';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import NavbarDummy from './Pages/NavbarDummy';

import './styles.css';
import Hero from './Pages/Hero';
import Toolbar from './Pages/Toolbar';
const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <NavbarDummy/>
        <Toolbar/>
        

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} /> 
           <Route path="/contact" element={<Contact />} />
           <Route path="/navbar" element={<NavbarDummy />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
