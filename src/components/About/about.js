import React from 'react';
import './about.css';

import memoji from '../../images/memoji.png';

class About extends React.Component {
   render() {
      return (
         <div className="about">
            <div className="about-box">
               <div className="about-img">
                  <img src={memoji} alt=""/>
               </div>
               <div className="about-content">
                  <h1>About Me</h1>
                  <div className="about-description">
                  <p>Hello, I'm Matthew, a Software Engineer based in Vancouver.<br/> <br/> I'm studying Computer Engineering at The University of British Columbia and I'm currently a Software Developer Intern at SAP.<br/> <br/>
                  I've always been fascinated by technology and I want be a part of developing the software that continues to change human nature. I'm still finding my way around the industry but I have an interest in Backend Development and Embedded Systems and I have picked up some Frontend skills along the way.<br/> <br/> 
                  Here are a few tools that I have been working with.  <br/> <br/>
                  </p>

                  <div className="about-skills">
                     <p>
                        » Go <br/>
                        » React <br/> 
                        » JavaScript <br/>
                     </p>
                     <p>
                        » Java <br/> 
                        » C++ <br/>
                        » HTML/CSS <br/>
                     </p>

                  </div>
               </div>
               </div>
            </div>
         </div>
      );
   }
}

export default About;