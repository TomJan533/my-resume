import React from 'react';
import './Contact.css';
import profilePhoto from '../../assets/CH_Paszport_xjw5ygdm_1440x1326.jpg';

const Contact = () => {
  return (
    <section id="contact" className="content-section">
      <div className="content">
        <div className="contact-header">
          <h1>Contact</h1>
          <p>Let's talk!</p>
        </div>
        <div className="content-container">
          <div className="column">
            <img src={profilePhoto} alt="Profile" className="profile-image" />
          </div>
          <div className="column">
            <div className="info">
              <p><strong>Video: </strong><a href="https://drive.google.com/file/d/1gOgf6SRc7_5PSdHyiexTEoF3HYP-iwPj/view" target="_blank" rel="noopener noreferrer">Link</a></p>
              <p><strong>LinkedIn: </strong> <a href="https://www.linkedin.com/in/tomasz-jankiewicz-developer/" target="_blank" rel="noopener noreferrer">tomasz-jankiewicz-developer</a></p>
              <p><strong>GitHub: </strong> <a href="https://github.com/TomJan533" target="_blank" rel="noopener noreferrer">TomJan533</a></p>
              <p><strong>Location: </strong>Warsaw, Poland (CEST)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
