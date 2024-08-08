import React from 'react';
import './Section.css';

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="content-section">
      <div className="content">
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default Section;
