import React from 'react';
import './toggle.css';

class Toggle extends React.Component {
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