import React from 'react';
import './Jumbotron.css';

const Jumbotron = ({ title, subtitle, content }) => {
  return (
    <div className="jumbotron">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Jumbotron;
