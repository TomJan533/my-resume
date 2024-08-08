import React from 'react';
import './App.css';
import profilePhoto from './assets/CH_Paszport_xjw5ygdm_1440x1326.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="image-container">
          <img src={profilePhoto} alt="Your Name" className="profile-photo" />
          <div className="overlay"></div>
        </div>
      </header>
      <section className="content-section">
        <div className="content">
          <h1>Your Name</h1>
          <p>Your Professional Title</p>
          <p>Your Contact Information</p>
          {/* Add more content here */}
        </div>
      </section>
    </div>
  );
}

export default App;
