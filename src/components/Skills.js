import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Skills.css';

function Skills() {
  const [activeBadges, setActiveBadges] = useState([]);

  const categories = [
    {
      title: "Web Development",
      key: "web",
      items: [
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React", icon: "⚛️" },
        { name: "Responsive Design", icon: "📱" },
        { name: "Figma", icon: "🎨" }
      ],
      size: "standard",
      specialClass: "web-card"
    },
    {
      title: "Programming",
      key: "programming",
      items: [
        { name: "C programming", icon: "💻" },
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
        { name: "Python Libraries", icon: "📚" },
      ],
      size: "standard"
    },
    {
      title: "Databases & Tools",
      key: "ml",
      items: [
        { name: "SQL", icon: "🗄️" },
        { name:"VS Code", icon: "🖥️" },
        { name: "Git & GitHub", icon: "🔧" },
        { name: "Prompt Engineering", icon: "🤖" },
        { name: "MongoDB", icon: "🍃" }

      ],
      size: "standard"
    },
    {
      title: "Advanced Excel",
      key: "excel",
      items: [
        { name: "Professional Documentation", icon: "📄 " },
        { name: "Pivot Tables", icon: "📋" },
        { name: "Power BI Integration", icon: "📊" },
        { name: "Data Visualization", icon: "📈" },
        { name: "Technical Presentations", icon: "📢" }

      ],
      size: "standard"
    }
  ];

  const toggleBadge = (badgeName) => {
    setActiveBadges((prev) =>
      prev.includes(badgeName)
        ? prev.filter((item) => item !== badgeName)
        : [...prev, badgeName]
    );
  };

  return (
    <section className="Skills fade-in">
      <div className="Skills-content">
        <h2>Skills & Expertise</h2>
        <div className="Skills-grid">
          {categories.map((cat) => (
            <article key={cat.key} className={`Skills-card ${cat.size} ${cat.specialClass || ''}`}>
              <h3>{cat.title}</h3>
              <div className="badge-row">
                {cat.items.map((item) => {
                  const isActive = activeBadges.includes(item.name);
                  return (
                    <button
                      type="button"
                      key={item.name}
                      className={`skill-badge ${isActive ? 'active' : ''}`}
                      onClick={() => toggleBadge(item.name)}
                    >
                      <span className="badge-icon">{item.icon}</span>
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
        <div className="view-certifications">
          <Link to="/certifications" className="certifications-button">View All Certifications</Link>
        </div>
      </div>
    </section>
  );
}

export default Skills;
