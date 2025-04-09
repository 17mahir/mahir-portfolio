import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo" onClick={() => {
  const homeSection = document.getElementById("home");
  if (homeSection) {
    homeSection.scrollIntoView({ behavior: "smooth" });
  }
}} >Mahir.dev</div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" className="nav-link"><sup>➤</sup>Home</a>
          <a href="#career" className="nav-link"><sup>➤</sup>Career</a>
          <a href="#projects" className="nav-link"><sup>➤</sup>Projects</a>
          <a href="#skills" className="nav-link"><sup>➤</sup>SkillStack</a>
          <a href="#contact" className="nav-link"><sup>➤</sup>Contact</a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
  {isOpen ? (
    <div className="close-icon">
      <span className="bar rotate45"></span>
      <span className="bar disappear"></span>
      <span className="bar rotate-45"></span>
    </div>
  ) : (
    <div className="open-icon">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  )}
</div>

      </div>
    </nav>
  );
};

export default Nav;
