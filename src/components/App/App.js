import React from 'react';
import './App.css';

import Experience from '../Experience/experience';
import Contact from '../Contact/contact';
import Intro from '../Intro/intro';
import Projects from '../Projects/projects';
import About from '../About/about';

function App() {
  return (
    <div className="App">
      <Contact />
      <Intro/>
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
