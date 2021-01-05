import React from 'react';
import resume from '../../images/MatthewChow_Resume.pdf'
import './resume.css';

class Resume extends React.Component {
   render() {
      return (
         <div className="resume">
            <embed src={resume} type="application/pdf" class="resume"/>
         </div>
      );
   }
}

export default Resume;