import React from 'react';
import './Projects.css';
const Projects = () => {
  const projects = [
    { id: 1, title: 'Projet 1', description: 'Site de géolocalisation des pharmacies', langage: 'MERN' },
    { id: 2, title: 'Projet 2', description: 'Site de la faculté polydisciplinaire de SB', langage: 'WordPress' },
    { id: 3, title: 'Projet 3', description: 'Site Web de gestion des salles informatiques', langage: 'Laravel' },
    { id: 4, title: 'Projet 4', description: 'Application mobile de Pokemon', langage: 'React Native' },
    { id: 5, title: 'Projet 5', description: 'Application de sécurisation de la voix sur IP', langage: 'Java' }
  ];

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card-container">
        <div className="row">
          <div className="col-md-6">
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={project.id}
                className="card fade-in"
                style={{ animationDelay: `${index * 0.1}s`, marginBottom: '20px' }}
              >
                <div className="card-header" style={{ background: '#ebf8fb', color: '#000000' }}>
                  {project.title}
                </div>
                <div className="card-body">
                  <p className="card-text">{project.description}</p>
                  <p className="card-text">{project.langage}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            {projects.slice(3).map((project, index) => (
              <div
                key={project.id}
                className="card fade-in"
                style={{ animationDelay: `${index * 0.1}s`, marginBottom: '20px' }}
              >
                <div className="card-header" style={{ background: '#ebf8fb', color: '#000000' }}>
                  {project.title}
                </div>
                <div className="card-body">
                  <p className="card-text">{project.description}</p>
                  <p className="card-text">{project.langage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Projects;
