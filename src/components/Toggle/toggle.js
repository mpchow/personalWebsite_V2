import React from 'react';
import './toggle.css';

class Toggle extends React.Component {
   counter = 0;


   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="toggle">
            <label id="switch" className="switch" onClick={() => {
            }}>
               <input type="checkbox"/>
               <span className="slider round"></span>
            </label>
         </div>
      );
   }
}

export default Toggle;