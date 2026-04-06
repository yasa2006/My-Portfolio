import React from 'react';
import './Experience.css';
import SwayamAIpdf from '../Documents/Yasaswini_Namana-6423d571-05-2025.pdf';

function Experience() {
  const workExperiences = [
    {
      title: "Python Programmer Intern",
      company: "Oasis Infobyte",
      dates: "05/10/2025 to 15/11/2025", // Placeholder
      achievements: [
        "Developed scalable Python applications and contributed to project development.",
        "[Achievement : Certified Appreciation letter]"
      ],
      blogLink: "https://yasaswini-namana.netlify.app/"
    },
    {
      title: "Data Science Trainee",
      company: "Epsilon Pi",
      dates: " 2025-26 ", // Placeholder
      achievements: [
        "Worked on data cleaning and exploratory analysis.",
        "Collaborated on machine learning model experimentation."
      ]
    },
    {
      title: "SDE1 (Software Development Engineer)",
      company: "Coding Studio",
      dates: "26-08-26 – Up-to-Date", // Placeholder
      achievements: [
        "Hosted for an codecraft event",
        "Worked on ERP Project(ABHYAS)"
      ]
    },
    {
      title: "Web Developer",
      company: "Abhedya Club",
      dates: "4-09-25 to 5-06-26", // Placeholder
      achievements: [
        "Web development for club activities and events.",
        "Achievement : Developed a responsive website for the club, enhancing online presence and engagement."
      ]
    },
    {
      title: "Summer of AI",
      company: "Swecha Telangana",
      dates: "Placeholder dates",
      achievements: [
        "Placeholder achievements"
      ],
      pdfLink: SwayamAIpdf
    }
  ];

  const education = [
    {
      degree: "Second Year CSE Student (AI & ML)",
      institution: "Vignana Bharathi Institute of Technology",
      year: "[Expected Graduation Year]" // Placeholder
    }
  ];

  return (
    <section className="Experience fade-in">
      <div className="Experience-content">
        <h2 className="slide-in-left">Experience & Education</h2>

        {/* Work History */}
        <div className="work-history slide-in-up">
          <h3>Work History</h3>
          <div className="timeline">
            {workExperiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{exp.title} at {exp.company}</h4>
                  <p className="dates">{exp.dates}</p>
                  <ul>
                    {(exp.achievements || []).map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                  {exp.blogLink && (
                    <div className="experience-links">
                      <a href={exp.blogLink} target="_blank" rel="noopener noreferrer" className="blog-link">View Blog</a>
                    </div>
                  )}
                  {exp.pdfLink && (
                    <div className="experience-links">
                      <a href={exp.pdfLink} target="_blank" rel="noopener noreferrer" className="blog-link">View Certificate PDF</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="education-section slide-in-up">
          <h3>Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <h4>{edu.degree}</h4>
              <p>{edu.institution}, {edu.year}</p>
            </div>
          ))}
        </div>

        <button className="view-more-btn">View More</button>
      </div>
    </section>
  );
}

export default Experience;
