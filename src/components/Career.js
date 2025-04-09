import React from 'react';
import './Career.css';

const Career = () => {
  return (
    <div id="career" className="career-container">
      <div className="matrix-overlay"></div>
      <section className="section">
        <h1 className="section-title">Education</h1>
        <div className="card">
          <h2>B.Tech in Information Technology</h2>
          <p>CHARUSAT University, 2020 - 2024</p>
          <p><strong>CGPA:</strong> 7.77</p>
          <p>
            <span className="badge">IELTS: 6.5 Overall</span>
            <span className="badge">Min 6 in each section</span>
          </p>
        </div>
      </section>

      <section className="section">
        <h1 className="section-title">Work Experience</h1>

        <div className="card">
          <h2>Web Development Intern (Backend)</h2>
          <p>Raven Technolabs</p>
          <p>May 2022 - July 2022</p>
          <p><strong>Technologies:</strong>Node.js, MongoDB, Express.js</p>
        </div>

        <div className="card">
          <h2>Web Development Intern (Frontend)</h2>
          <p>Frapper Design Studio</p>
          <p>May 2023 - July 2023</p>
          <p><strong>Technologies:</strong>React.js, Bootstrap, UI components</p>
        </div>

        <div className="card">
          <h2>App Developer Intern</h2>
          <p>Synergy</p>
          <p>Jan 2024 - May 2024</p>
          <p><strong>Technologies:</strong> .NET MAUI, SQL Server</p>
        </div>
      </section>

      <section className="section">
        <h1 className="section-title">Certifications</h1>
        <ul className="cert-list">
          <li>Google Cloud Computing Foundations: Networking and Security in Google Cloud – Google Cloud Skills Boost</li>
          <li>Data Manipulation with pandas – DataCamp</li>
          <li>Data Visualization in Power BI – DataCamp</li>
          <li>Exploratory Data Analysis in Power BI – DataCamp</li>
          <li>Exploratory Data Analysis in Python – DataCamp</li>
          <li>Foundations: Data, Data, Everywhere – Google</li>
        </ul>
      </section>
    </div>
  );
};

export default Career;
