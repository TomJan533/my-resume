import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section id="about" title="About">
        <p>Hi! I'm a Backend Developer with a Data Science background. I also have Product Owner experience.</p>
        <p>Coding professionally since 2014. ~10 years.</p>
        <p>Worked for 2 big, established companies from the advertising industry.</p>
        <p>I also enjoyed projects with US-based clients through a software house.</p>
        <p>I mostly worked in smaller teams (1-5 devs) often collaborating with other teams of similar size.</p>
        <p>Throughout this time, I worked with a wide variety of roles starting from end users to direct cooperation with CEOs or Client Product Managers.</p>
        <p>It's worth mentioning other roles like business analysts, data scientists, data engineers, frontend devs, DevOps, QAs, architects, scrum masters, and product owners.</p>
      </Section>
      <Section id="services" title="Services">
        <p>Here you can find details about the services I offer and how I can help you.</p>
      </Section>
      <Section id="portfolio" title="Portfolio">
        <p>Check out my portfolio to see examples of my work and projects I have completed.</p>
      </Section>
      <Section id="contact" title="Contact">
        <p>If you want to get in touch, here's how you can reach me.</p>
      </Section>
    </div>
  );
}

export default App;
