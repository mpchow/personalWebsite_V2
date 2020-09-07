import React from 'react';
import './contact.css';

class Contact extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="contact">
            <a>Resume</a> <br/>
            <a id="emailLink" href="mailto:mattchow918@gmail.com" target="_blank">Email</a> <br/>
            <a id="githubLink" href="https://github.com/mpchow" target="_blank">Github</a> <br/>
            <a id="linkedInLink" href="https://linkedin.com/in/matthewpchow" target="_blank">LinkedIn</a> <br/>
         </div>
      );
   }
}

export default Contact;