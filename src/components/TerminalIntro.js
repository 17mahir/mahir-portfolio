import React, { useEffect, useState } from 'react';
import './TerminalIntro.css';

const TerminalIntro = () => {
  const [text, setText] = useState('');
  const fullText = `> Hi, I’m Mahir Lad — An Aspiring Computer Engineer Who is Passionate About Data and Technology.`;

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 40); // Faster but still "typewriter"
    return () => clearInterval(typing);
  }, []);

  return (
    <div id="home" className="terminal-intro">
      <p className="terminal-line">{text}<span className="cursor">█</span></p>
      <p className="career-objective">Graduate in Information Technology | Data & Web Dev Enthusiast | MERN Stack | Python | SQL</p>
      <a href="https://drive.google.com/file/d/1uVbxSCD72pN_so9877ra8YY50c2ClBPy/view?usp=sharing" className="resume-btn">
        Download Resume
      </a>
    </div>
  );
};

export default TerminalIntro;
