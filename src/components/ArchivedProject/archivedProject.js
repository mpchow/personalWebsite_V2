import React from 'react';
import './archivedProject.css';

class ArchivedProject extends React.Component {
   render() {
      return (
         <div className="archivedProject">
            <div className="archivedProject-content">
               <h2>{this.props.details.title}</h2>  <br/>
               <p>{this.props.details.description}</p> <br/>
            </div>
            <div>
               <p>{this.props.details.technologies}</p>
               <div className="archivedProject-links">
               {this.props.details.link && <a href={this.props.details.link} target="_blank" rel="noopener noreferrer">View </a>}
               {this.props.details.link && this.props.details.github && <p>&nbsp; &nbsp;</p>}
               {this.props.details.github && <a href={this.props.details.github} target="_blank" rel="noopener noreferrer">Github</a>}
               </div>
            </div>
         </div>
      );
   }
}

export default ArchivedProject;