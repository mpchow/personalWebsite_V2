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
            <h1>Hi, I'm <br/> Matthew Chow 👋🏻</h1>
            <h2>Software Developer Intern @ SAP <br/> Computer Engineering Student @ UBC</h2>

            </div>
            <Contact />
         </div>
      );
   }
}

export default Intro;