import React from 'react';
import './Projects.css';
const projectsData = [
  {
    id: 1,
    logo: 'P1',
    title: 'AI VOICE ASSISTANT',
    description: 'A brief description of this amazing project. It solves a real-world problem with a clean and efficient solution.',
    tags: ["Python", "Voice Processing", "AI"],
    liveUrl: 'https://drive.google.com/file/d/130xAW_5f5Wxm_HI9oTiTTjHemaZup-Jv/view?usp=drive_link',
    codeUrl: 'https://github.com/yasa2006/OIBSIP_Python_Programming_task_1',
  },
  {
    id: 2,
    logo: 'P2',
    title: 'Project Two',
    description: 'This project showcases advanced front-end techniques and a beautiful, responsive user interface.',
    tags: ['Vue', 'Firebase', 'SCSS'],
    liveUrl: '#',
    codeUrl: '#',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="projects-list-container">
      {projectsData.map((project) => (
        <div className="project-item" key={project.id}>
          <div className="project-details">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="project-links">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;