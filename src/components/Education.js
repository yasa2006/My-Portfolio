import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      institution: 'Vignana Bharathi Institute of Technology',
      degree: 'Bachelor of Technology - BTech, Computer Science',
      years: '2024 – 2028',
      grade: 'CGPA:-9.1',
      logo: 'https://vbithyd.ac.in/wp-content/uploads/2020/10/cropped-vbit-naac-and-nba-accredited-college-logos-min.png',
    },
    {
      institution: 'RESONANCE JUNIOR COLLEGE',
      degree: 'Intermediate',
      years: '2022 – 2024',
      grade: '96.7%',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMF5yWM1ElTbsw-Rn1gxkE5a9FtFXHGzyfCg&s',
    },
    {
      institution: "Bharatiya Vidya Bhavan's",
      degree: 'CBSE, School',
      years: '2022',
      grade: '10th Percentage:-90%',
      logo: 'https://hellohyderabad.org/wp-content/uploads/2024/02/images-31-1.jpg',
    },
  ];

  return (
    <section id="education" className="education-section fade-in">
      <h2>Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item slide-in-up hover-shadow pop-in">
            <div className="education-logo">
              <img src={edu.logo} alt={`${edu.institution} Logo`} />
            </div>
            <div className="education-details">
              <h3>{edu.institution}</h3>
              <p className="education-degree">{edu.degree}</p>
              <p className="education-years">{edu.years}</p>
              <p className="education-grade">{edu.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
