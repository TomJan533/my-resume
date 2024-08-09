import React from 'react';
import SkillGroup from './SkillGroup';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2>Skills</h2>
        <p>Hands-on experience</p>
      </div>
      <div className="skills-container">
        <SkillGroup
          title="Python"
          skills={[
            'Django',
            'Selenium',
            'Pandas',
            'Requests',
            'Beautiful Soup',
            'Scrapy',
            'Django REST framework',
            'Airflow',
          ]}
        />
        <SkillGroup
          title="NodeJs / Typescript"
          skills={[
            'Jest',
            'Mocha, Chai, Sinon',
            'Promise Pool',
            'Express',
            'NestJS',
            'Axios',
            'Winston',
            'Mongoose',
          ]}
        />
        <SkillGroup
          title="Google Cloud Platform"
          skills={[
            'Big Query',
            'Pub/Sub',
            'Cloud Composer (Airflow)',
            'Cloud Functions',
            'Cloud Build',
            'Cloud Logging',
            'Firebase',
            'Cloud Storage',
            'Gmail API',
            'Secret Manager',
          ]}
        />
        <SkillGroup
          title="Other"
          skills={[
            'PostgreSQL',
            'MongoDB',
            'MSSQL',
            'GraphQL',
            'Redis',
            'Swagger',
            'Postman',
            'Git',
            'Jmeter',
            'Docker',
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;
