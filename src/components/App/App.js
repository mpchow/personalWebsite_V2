import React from 'react';
import './App.css';

import Experience from '../Experience/experience';
import Intro from '../Intro/intro';
import Projects from '../Projects/projects';
import About from '../About/about';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About />
      <Experience />
      <Projects />
      <div className="App-footer">
        <p>Designed & Built with <span role="img" aria-label="heart">❤️</span> by Matthew Chow | 2020</p>
      </div>
    </div>
  );
}

export default App;
