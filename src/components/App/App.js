import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

import Experience from '../Experience/experience';
import Intro from '../Intro/intro';
import Projects from '../Projects/projects';
import About from '../About/about';
import Resume from '../Resume/resume';

function App() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  if (isMobile) {
    return (
      <div>
        Come back later for a mobile friendly version!
      </div>
    );
  }
  else {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/">
              <div >
                <Intro/>
                <About />
                <Experience />
                <Projects />
                <div className="App-footer">
                  <p>Designed & Built with <span role="img" aria-label="heart">❤️</span> by Matthew Chow | 2020</p>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App;
