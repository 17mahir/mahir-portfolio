import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import contactImg from '../assets/contactimg.svg'; // adjust the path as needed

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h1>Contact</h1>

      <div className="contact-container">
        <div className="contact-image">
          <img src={contactImg} alt="Contact Illustration" />
        </div>

        <div className="contact-links">
          <a href="mailto:mahirlad1723@gmail.com" className="contact-item">
            📧 mahirlad1723@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/mahir-lad-n1810/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://github.com/17mahir"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
