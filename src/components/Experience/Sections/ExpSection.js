import React from 'react';
import './ExpSection.css';

const ExpSection = ({ year, title, subtitle, description, alignment }) => {
  return (
    <div className={`timeline-item ${alignment}`}>
      <div className="year-circle">{year}</div>
      <div className="timeline-content">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExpSection;
