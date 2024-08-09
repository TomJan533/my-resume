import React from 'react';
import './SkillGroup.css';

const SkillGroup = ({  title, skills }) => {
  return (
    <div className="skill-group">
      <h3>{title}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillGroup;
