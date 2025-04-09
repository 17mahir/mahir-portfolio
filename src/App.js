import React from 'react';
import MatrixBackground from './components/MatrixBackground';
import TerminalIntro from './components/TerminalIntro';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Career from './components/Career';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <MatrixBackground />
      <Nav />
      <TerminalIntro />
      <Career />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;