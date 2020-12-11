import React from 'react';
import './projects.css';

import Project from '../Project/project';

import CurrenSee from '../../images/CurrenSee.png';


class Projects extends React.Component {
   constructor(props) {
      super(props);
      this.state = {projectsList: [{title: "CurrenSee", description: "» Visualized past currency data to predict future trends by dynamically updating trend lines against a user inputted base currency with React and Chart.js", image: CurrenSee, link: "", github: ""}, {title: "FOEX", description: "", image: "", link: ""}]};
   }

   render() {
      return (
         <div className="projects">
            <div className="projects-box">
               <h1 className="projects-title">Projects</h1>

               {this.state.projectsList.map( project => <Project title={project.title} description={project.description} image={project.image}/>)}
{/* 

               <div className="projects-archive">
                  <h1 className="projects-title">Archive</h1>
               </div> */}
            </div>


         </div>
      );
   }
}

export default Projects;