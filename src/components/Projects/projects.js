import React from 'react';
import './projects.css';

import Project from '../Project/project';

import CurrenSee from '../../images/CurrenSee.png';
import pilldex from '../../images/pilldex.png';
import FOEX from '../../images/FOEX.png';


class Projects extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         projectsList: [
            {title: "pilldex", description: "", image: pilldex, github: "https://github.com/mpchow/pilldex", portrait: true},
            {title: "CurrenSee", description: "Visualized past currency data to predict future trends by dynamically updating trend lines against a user inputted base currency with React and Chart.js", image: CurrenSee, link: "https://confident-saha-dc0127.netlify.app", github: "https://github.com/mpchow/CurrenSee", portrait: false},
            {title: "FOEX", description: "", image: FOEX, github: "https://github.com/mpchow/FOEX_nwHacks2020", portrait: true},
         ],
         projectsArchive: [
         ]
      };
   }

   render() {
      return (
         <div className="projects">
            <div className="projects-box">
               <h1 className="projects-title">Projects</h1> <h1 className="projects-archive">Archive</h1>

               {this.state.projectsList.map( project => <Project details={project}/>)}
            </div>
            
            {/* 

               <div className="projects-archive">
                  <h1 className="projects-title">Archive</h1>
               </div> */}

         </div>
      );
   }
}

export default Projects;