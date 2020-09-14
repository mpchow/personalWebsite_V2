import React from 'react';
import './project.css';

class Project extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="project">
            <h1>{this.props.title}</h1>
         </div>
      );
   }
}


export default Project;