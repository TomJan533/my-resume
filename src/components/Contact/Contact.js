import React from 'react';
import './Contact.css';
import profilePhoto from '../../assets/CH_Paszport_xjw5ygdm_1440x1326.jpg';

const Contact = () => {
  return (
    <section id="contact" className="content-section">
      <div className="content">
        <h1>Contact</h1>
        <div className="contact-image-container">
          <img src={profilePhoto} alt="Your Name" className="contact-image" />
        </div>
        <div className="contact-info">
          <p>Email: your.email@example.com</p>
          <p>Phone: +123 456 789</p>
          <p>Location: City, Country</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">your-profile</a></p>
          <p>GitHub: <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">your-username</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
