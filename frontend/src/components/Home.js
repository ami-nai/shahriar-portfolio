import React, { useState, useEffect } from "react";
import { fetchEdus } from "./edu.js";
import { fetchProjects } from "./projects.js";

const Home = () => {

  const [edus, setEdus] = useState([]); 
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchEdus(setEdus);
    fetchProjects(setProjects);
  }, []);


return (
  <div>
    <div>
      
      <nav className="navbar">
      <a href="#navbar"><div className="navbar-logo">Shahriar</div> </a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a>
      <a href="#achievements">Achievements</a>
      <a href="#skills">Skills</a>
      </nav>
    </div>
    <div className="intro-section">
      <div className="intro-text">
        <h1>Welcome to Shahriar's Portfolio</h1>
        <p>
          Hello! I'm Shahriar, a passionate developer with expertise in various technologies.
          Explore my portfolio to know more about my projects, skills, and achievements.
        </p>
      </div>
      <div className="intro-photo">
        <img src="path_to_your_photo.jpg" alt="Shahriar" />
      </div>
    </div>
    <div className="skills-section" id="skills">
      <h2>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        {/* Add more skills as needed */}
      </ul>
    </div>
    <div className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project._id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>Tech stack: {project.techStack}</p>
              <p>{project.description}</p>
            </div>
          ))
        ) : (
          <p>Updating the Projects segment...</p>
        )}
      </div>
    </div>
    <div className="achievements-section" id="achievements">
      <h2>Achievements</h2>
      <ul>
        <li>Achievement 1</li>
        <li>Achievement 2</li>
        <li>Achievement 3</li>
        {/* Add more achievements as needed */}
      </ul>
    </div>
    <div className="education-section" id="education">
      <h2>Education</h2>
      {edus.length > 0 ? (
        <div className="education-list">
          {edus.map((edu) => (
            <div key={edu._id} className="education-item">
              <img src={edu.institutionLogo} alt={edu.institutionName} className="education-image" />
              <h3>{edu.institutionName}</h3>
              <h3>{edu.degree}</h3>
              <h5>Duration: {edu.duration}</h5>
              <h5>Location: {edu.location}</h5>
              <p>CGPA: {edu.cgpa}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Updating the qualification segment...</p>
      )}
    </div>
  </div>
    // <div>
    //   {/* Main Content */}
    //   <div className="main-content">
    //     <h1>Shahriar's Portfolio</h1>
    //     <p>
    //       Welcome to Shahriar's Portfolio. Here you can find all the information
    //       about Shahriar's projects and educational qualifications.
    //     </p>
    //   </div>
    //   <div className="home-container">
    //     <center>
    //       <a href="#proj">Projects</a>
    //       <h1>Welcome to Shahriar's Portfolio</h1>
    //     </center>
    //     <h2>Qualification</h2>
    //     {edus.length > 0 ? (
    //       <div className="car-list">
    //         {edus.map((edu) => (
    //           <div key={edu._id} className="car-item">
    //             <img src={edu.institutionLogo} alt={edu.institutionName} className="car-image" />
    //             <h3>{edu.institutionName}</h3>
    //             <h3>{edu.degree}</h3>
    //             <h5>Duration: {edu.duration}</h5>
    //             <h5>Location: {edu.location}</h5>
    //             <p>CGPA: </p>
               
    //           </div>
    //         ))}
    //       </div>
    //     ) : (
    //       <p>Updating the qualification segment...</p>
    //     )}

    //     <h2 id = "proj">projects</h2>
    //     {projects.length > 0 ? (
    //       <div className="car-list">
    //         {projects.map((project) => (
    //           <div key={project._id} className="car-item">
    //             <img src={project.image} alt={project.title} className="car-image" />
    //             <h3>{project.title}</h3>
    //             <h3>Tech stack: {project.techStack}</h3>
    //             <p>Duration: {project.description}</p>
               
               
    //           </div>
    //         ))}
    //       </div>
    //     ) : (
    //       <p>Updating the Projects segment...</p>
    //     )}
    //   </div>

      
      
    // </div>
  );
};

export default Home;