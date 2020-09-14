import React from 'react';
import './intro.css';

import Toggle from '../Toggle/toggle';
import Contact from '../Contact/contact';

class Intro extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="intro">
            <Toggle />
            <div className="intro-text">
            <h1>Hi, I'm <br/> Matthew Chow. <span role="img" aria-label="hand">👋🏻</span></h1>
            <h2>Software Engineer with a focus on Backend Development. <br /> Constantly pursuing impactful work.</h2>

            </div>
            <Contact />
         </div>
      );
   }
}

export default Intro;
