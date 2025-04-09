import React from 'react';
import './Projects.css';
import portfolioimg from '../assets/portfolio.png';
import agroimg from '../assets/agrowaste.png';
import ercimg from '../assets/erc20.png';
import shopimg from '../assets/shopping.jpg';
import studentimg from '../assets/student.jpg';
import warehouseimg from '../assets/warehouse.png';

const projectData = [
  {
    name: 'Portfolio Website',
    desc: 'A personal portfolio built using React.js with Matrix-themed design and responsive UI.',
    tech: ['React', 'CSS', 'Vite'],
    github: 'https://github.com/mahirlad/portfolio',
    live: '',
    image: portfolioimg,
  },
  {
    name: 'Agri Waste Marketplace',
    desc: 'A MERN stack web app that connects farmers and companies for trading crop residues and renting agricultural tools.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    github: 'https://github.com/17mahir/agri-waste-marketplace',
    live: '',
    image: agroimg
  },
  {
    name: 'ERC-20 Crypto Token',
    desc: 'A smart contract implementation of a custom ERC-20 token deployed on the Ethereum blockchain.',
    tech: ['Solidity', 'Ethereum', 'Remix', 'ERC-20'],
    github: 'https://github.com/17mahir/cryptotoken-erc20',
    live: '',
    image: ercimg
  },
  {
    name: 'Shopping Site UI',
    desc: 'Frontend design of an e-commerce website using Bootstrap and custom CSS, featuring product listings and a cart layout.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/17mahir/shopping-site-ui',
    live: '',
    image: shopimg
  },
  {
    name: 'Student Management System',
    desc: 'A full-stack student record management app using Spring Boot, React.js, and MySQL with CRUD functionality.',
    tech: ['Spring Boot', 'React.js', 'MySQL', 'Java'],
    github: 'https://github.com/17mahir/springboot-react-studentapp',
    live: '',
    image: studentimg
  },
  {
    name: 'Warehouse Management System',
    desc: 'Inventory management app built using EJS, Node.js, Express, and MongoDB to handle CRUD operations for warehouse items.',
    tech: ['EJS', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/17mahir/warehouse-mgmt-system',
    live: '',
    image: warehouseimg
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h1 className="section-title">Projects</h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.name} className="project-img" />
            <div className="project-content">
              <h2>{project.name}</h2>
              <p>{project.desc}</p>
              <div className="tech-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
