import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="content-section">
      <div className="about-container">
        <div className="about-text">
          <h1>About</h1>
          <p>Hi! I'm a Backend Developer with a Data Science background. I also have Product Owner experience.</p>
          <p>Coding professionally since 2014. ~10 years.</p>
          <p>Worked for 2 big, established companies from the advertising industry.</p>
          <p>I also enjoyed projects with US-based clients through a software house.</p>
          <p>I mostly worked in smaller teams (1-5 devs) often collaborating with other teams of similar size.</p>
          <p>Throughout this time, I worked with a wide variety of roles starting from end users to direct cooperation with CEOs or Client Product Managers.</p>
          <p>It's worth mentioning other roles like business analysts, data scientists, data engineers, frontend devs, DevOps, QAs, architects, scrum masters, and product owners.</p>
        </div>
        <div className="about-list">
          <h1>Key highlights</h1>
          <ul>
            <li>10 years of experience</li>
            <li>US client direct collaboration</li>
            <li>Cross-functional team engagement</li>
            <li>Agile expert</li>
            <li>Problem solving skills</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
