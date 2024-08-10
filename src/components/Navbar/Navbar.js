import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#experience">Experience</a></li>
        <li className="nav-item"><a href="#skills">Skills</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
