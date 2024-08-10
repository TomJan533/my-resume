import React from 'react';
import ExpSection from './Sections/ExpSection';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="timeline">
      <h1>Experience</h1>
        <ExpSection
          year="2024"
          title="Backend Developer / Data Engineer"
          subtitle="2021-2024 Sofomo"
          description="Rest API Development with microservices architecture
ETL Development on GCP using Airflow
Collaborated with cross-functional teams to integrate backend services with frontend applications, enhancing system efficiency
Direct cooperation with US based client"
          alignment="left"
        />
        <ExpSection
          year="2021"
          title="Senior Business Intelligence Developer / Product Owner"
          subtitle="2017-2021 Publicis Media"
          description="Building tools based on integrations with advertising systems: Google Ads, Google, Campaign Manager, Advanced Web Ranking, Screaming Frog for internal or external use.
            Building tool for optimising media spend based on econometric model.
            Building reporting tools based on data warehouse with Excel and Tableau."
          alignment="right"
        />
        <ExpSection
          year="2017"
          title="Data Analyst"
          subtitle="2014-2017 Publicis Media"
          description="Designing and generating reports based on established reporting standards, with the agreed frequency delivering them on time towards defined end-users.
Developing reports within Microsoft Excel by using advanced VBA programming.
Writing VBA/SQL code based on the business requirements
Providing regular support on the implemented automation tools to end users."
          alignment="left"
        />
        <ExpSection
          year="2014"
          title="Sustainability Specialist"
          subtitle="2010-2014 IKEA"
          description="Waste flow management on local level.
            Cooperation with local governmental units and NGOs.
            Implementiation of CSR policy on local level.
            Conducting internal trainings for employees."
          alignment="right"
        />
      </div>
    </section>
  );
};

export default Experience;
