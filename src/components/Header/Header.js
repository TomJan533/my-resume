import React from 'react';
import profilePhoto from '../../assets/CH_Paszport_xjw5ygdm_1440x1326_blue.jpg';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header" id="home">
      <div className="image-container">
        <img src={profilePhoto} alt="Your Name" className="profile-photo" />
        <div className="overlay"></div>
        <div className="title-overlay">
          <h1>Hello, I'm</h1>
          <h1>Tomasz Jankiewicz</h1>
          <p>and this is my rezume</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
