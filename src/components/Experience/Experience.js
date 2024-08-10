import React from 'react';
import ExpSection from './Sections/ExpSection';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="timeline">
      <h1>Experience</h1>
        <ExpSection
          year="2023"
          title="Backend Developer"
          subtitle="Company XYZ"
          description="Started working as a Senior Backend Developer at Company XYZ, focusing on cloud solutions and microservices architecture."
          alignment="left"
        />
        <ExpSection
          year="2020"
          title="Backend Developer"
          subtitle="Company XYZ"
          description="Joined Company ABC as a Backend Developer, where I contributed to building scalable APIs and worked closely with data science teams."
          alignment="right"
        />
        <ExpSection
          year="2017"
          title="Backend Developer"
          subtitle="Company XYZ"
          description="Began working at Company DEF as a Junior Developer, focusing on backend development and gaining experience with various technologies."
          alignment="left"
        />
      </div>
    </section>
  );
};

export default Experience;
