import React from 'react';
import './about.css';

import memoji from '../../images/memoji.png';

class About extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         aboutSelect: "Intro"
      }
   }

   setView(introType) {
      this.setState({aboutSelect: introType});
   }


   render() {
      return (
         <div className="about">
            <div className="about-box">
               <div className="about-img">
                  <img src={memoji} alt=""/>
               </div>
               <div className="about-content">
                  <div className="about-header">
                     <h1>About Me</h1>
                     <div className="about-category">
                        <p className={this.state.aboutSelect === "Intro" ? "about-category-selected" : null} onClick={() => {this.setView("Intro")}} >Intro</p>
                        <p className={this.state.aboutSelect === "Skills" ? "about-category-selected" : null} onClick={() => {this.setView("Skills")}} >Skills</p>
                     </div>
                  </div>
                  {this.state.aboutSelect === "Intro" && <div className="about-description">
                  <p>Hello, I'm Matthew, a Software Engineer based in Vancouver.<br/> <br/> I'm studying Computer Engineering at The University of British Columbia and I'm currently a Software Developer Intern at SAP.<br/> <br/>
                  I've always been fascinated by technology and I want be a part of developing the software that continues to change human nature. I'm still finding my way around the industry but I have an interest in Backend Development and Embedded Systems and I have picked up some Frontend skills along the way.
                  </p>

               </div>}

               {this.state.aboutSelect === "Skills" && 
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
               }
               </div>
            </div>
         </div>
      );
   }
}

export default About;