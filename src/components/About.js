import React from 'react';
import './About.css';

function About() {
  return (
    <section className="About fade-in">
      <div className="About-content">
        <h2 className="slide-in-left">About Me</h2>

        <div className="narrative slide-in-up">
          <p>
            My journey into technology began with a fascination for how intelligent systems could solve real-world problems. As a second-year CSE student specializing in AI & ML, I've cultivated a strong foundation in machine learning, data structures, and web development. My academic pursuits are complemented by hands-on project experience, where I enjoy transforming complex ideas into functional applications.
          </p>
          <p>
            Currently pursuing my B.Tech in Computer Science (CSM), I focus on bridging the gap between theory and application. I enjoy translating abstract concepts like algorithms and machine learning principles into practical, efficient, and scalable solutions.
          </p>
          <p>
            Beyond academics, I’m deeply interested in AI, web development, and human-centered design. I enjoy collaborating on projects that challenge conventional thinking and push technological boundaries.
          </p>
          <p className="quote">
            "In every project I take on, I bring curiosity, consistency, and creativity — striving to grow as a lifelong learner dedicated to building a smarter, more connected future."
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
