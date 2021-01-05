import React from 'react';
import './project.css';



class Project extends React.Component {
   // constructor(props) {
   //    super(props);
   // }



   render() {
      let description =  (<div className={this.props.details.portrait ? "project-description-portrait" : "project-description-landscape"}>
      <div className="project-header">
         <h1 id="project-title">{this.props.details.title} 
         </h1>
         <div className="project-links">
            {this.props.details.link && <a href={this.props.details.link} target="_blank" rel="noopener noreferrer">View </a>}
            {this.props.details.link && this.props.details.github && <p>&nbsp; &nbsp;</p>}
            {this.props.details.github && <a href={this.props.details.github} target="_blank" rel="noopener noreferrer">Github</a>}
         </div>

      </div>
      <p>{this.props.details.description} <br/> <br/> {this.props.details.technologies}</p> 
   </div>);

      let image = (<div className="project-image">
      <img className={this.props.details.portrait ? "project-image-portrait" : "project-image-landscape"} src={this.props.details.image} alt=""/>
   </div>);

      return (
         <div>
            {this.props.details.portrait ? <div div className="project-box">{image}{description}</div> : <div className="project-box">{description}{image}</div>}
         </div>

      );
   }
}


export default Project;