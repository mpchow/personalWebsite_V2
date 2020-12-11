import React from 'react';
import './project.css';



class Project extends React.Component {
   // constructor(props) {
   //    super(props);
   // }

   render() {
      return (
         <div className="project-box">
            <div className="project-description">
               <h1>{this.props.title}</h1>
               <p>{this.props.description}</p>
            </div>
            <div className="project-image">
               <img src={this.props.image} alt=""/>
            </div>
         </div>
      );
   }
}


export default Project;