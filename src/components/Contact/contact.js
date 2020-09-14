import React from 'react';
import './contact.css';


class Contact extends React.Component { 
   render() {
      return (
         <div className="contact">
            <a id="resumeLink" href="https://matthewchow.me">Resume</a> <br/>
            <a id="emailLink" href="mailto:mattchow918@gmail.com" target="_blank" rel="noopener noreferrer">Email</a> <br/>
            <a id="githubLink" href="https://github.com/mpchow" target="_blank" rel="noopener noreferrer">Github</a> <br/>
            <a id="linkedInLink" href="https://linkedin.com/in/matthewpchow" target="_blank" rel="noopener noreferrer">LinkedIn</a> <br/>
         </div>
      );
   }
}

export default Contact;