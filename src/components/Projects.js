import React from 'react';
import './Projects.css';
import bmiTrackerImage from '../Image/Screenshot 2025-11-06 140815.png';
import passwordImg from '../Image/password.png';
import cropDiseaseImg from '../Image/make_it_realistic_202604031111.jpeg';
import voiceAssistantImg from '../Image/Screenshot 2025-11-06 140214.png';

function Projects() {
  const projects = [
    {
      title: "AI Voice Assistant",
      primarySkill: "Python • Voice Processing • AI",
      image: voiceAssistantImg,
      description: "Advanced AI voice assistant with natural language processing and voice synthesis capabilities.",
      outputLink: "#",
      codeLink: "https://github.com/yasa2006/OIBSIP_Python_Programming_task_1"
    },
    {
      title: "BMI Tracker",
      primarySkill: "Python • Tkinter • Matplotlib • Numpy",
      image: bmiTrackerImage,
      description: "Calculates Body Mass Index (BMI), Body Metabolic Rate (BMR), ideal weight ranges, and generates personalized diet plans based on individual health data and fitness goals.",
      outputLink: "#",
      codeLink: "https://github.com/yasa2006/OIBSIP_Python_Programming_task_2"
    },
    {
      title: "Password Generator",
      primarySkill: "Python • JSON • Tkinter",
      image: "https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/b62eda64-54d7-45ee-a30a-62409599838c/f9b25956-8926-4d02-87fa-24e0876c735c.jpg",
      description: "Provides both random and personalized password generation methods while emphasizing security best practices and password strength assessment.",
      outputLink: "#",
      codeLink: "https://github.com/yasa2006/OIBSIP_Python_Programming_task_3"
    },
    {
      title: "Pet Adoption Platform",
      primarySkill: "HTML • CSS • Bootstrap",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFfUXhJAiU7ueryUP_Ln3oIOlp9QwYuV2kPJ_UG4G-Q&s",
      description: "Static website using the Bootstrap framework. The main objective of this project was to design a user-friendly with modern design components and faster development using pre-built Bootstrap classes.",
      outputLink: "#",
      codeLink: "https://github.com/Siddhu-Srinivas/feedback-collector"
    },
    {
      title: "Crop Disease Detection",
      primarySkill: "FastApi • React • Langchain • Grok API • Pinecone Vector DB",
      image: cropDiseaseImg,
      description: "The Crop Disease Diagnosis Assistant is an intelligent agricultural tool that leverages computer vision and machine learning to detect diseases in crops from uploaded leaf or plant images. Designed for farmers, agronomists, and agricultural researchers, it delivers fast, accurate diagnoses with region-specific treatment guidance.",
      outputLink: "#",
      codeLink: "https://github.com/Siddhu-Srinivas/My-Project-"
    }
  ];

  return (
    <section className="Projects fade-in">
      <div className="Projects-content">
        <h2 className="slide-in-left">Featured Projects</h2>
        <div className="Projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="Project-card hover-scale hover-shadow pop-in">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="primary-skill">{project.primarySkill}</p>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
