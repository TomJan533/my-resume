import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
