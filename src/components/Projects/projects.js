import React from 'react';
import './projects.css';

import Project from '../Project/project';

class Projects extends React.Component {
   constructor(props) {
      super(props);
      this.state = {projectsList: [{title: "CurrenSee", description: "", link: ""}, {title: "FOEX", description: "", link: ""}, {title: "", description: "", link: ""}, {title: "", description: "", link: ""}]}
   }

   render() {
      return (
         <div className="projects">
            <div className="projects-box">
               <h1 className="projects-title">Projects</h1>

               {this.state.projectsList.map( project => <Project title={project.title} />)}


               <div className="projects-archive">
                  <h1 className="projects-title">Archive</h1>
               </div>
            </div>


         </div>
      );
   }
}

export default Projects;