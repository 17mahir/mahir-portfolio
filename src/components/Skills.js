import React from 'react';
import './Skills.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
  FaGitAlt, FaGithub, FaJava
} from 'react-icons/fa';
import {
  SiMongodb, SiMysql, SiFigma, SiSolidity,
  SiEthereum, SiSpring, SiBootstrap, SiPostman
} from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";


const techSkills = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Spring Boot', icon: <SiSpring /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Solidity', icon: <SiSolidity /> },
  { name: 'Ethereum', icon: <SiEthereum /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'Postman (API)', icon: <SiPostman /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'VS Code', icon: <BiLogoVisualStudio /> },
];

const softSkills = [
  'Problem Solving',
  'Teamwork',
  'Communication',
  'Adaptability',
  'Creativity',
  'Time Management',
  'Critical Thinking',
  'Leadership'
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h1>Technical Skills & Tools</h1>
      <div className="grid-tech">
        {techSkills.map((skill, index) => (
          <div className="tech-box" key={index}>
            {skill.icon}
            <div className="tooltip">{skill.name}</div>
          </div>
        ))}
      </div>

      <h1 style={{ marginTop: '50px' }}>Soft Skills</h1>
      <div className="grid-soft">
        {softSkills.map((skill, index) => (
          <div className="soft-box" key={index}>{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
