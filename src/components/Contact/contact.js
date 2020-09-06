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
            <a>Email</a> <br/>
            <a>Github</a> <br/>
            <a>LinkedIn</a> <br/>
         </div>
      );
   }
}

export default Contact;