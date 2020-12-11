import React from 'react';
import './experience.css';

class Experience extends React.Component {
   constructor(props) {
      super(props);
      this.state = {experience: "SAP"};
   }

   selectExperience(company) {
      this.setState({experience: company});
   }

   render() {
      return (
         <div className="experience">
               <div className="experience-box">
                  <div className="experience-titles">
                     <div className="experience-title" onClick={() => {
                        this.selectExperience("SAP");
                     }} style={{borderBottom: "1px solid black"}}>
                        SAP
                     </div>

                     <div className="experience-title" onClick={() => {
                        this.selectExperience("Perk Labs");
                     }} style={{borderBottom: "1px solid black"}}>
                        Perk Labs
                     </div>

                     <div className="experience-title" onClick={() => {
                        this.selectExperience("UBC Solar");
                     }}>
                        UBC Solar
                     </div>
                  </div>
                  <div className="experience-description">
                     <h1>Experience</h1>
                     <div className="experience-text">
                        {this.state.experience === "SAP" && <p>
                        » Developing infrastructure for SAP HANA with Python and Golang
                           </p>}
                        
                        {this.state.experience === "Perk Labs" &&  <p>
                        » Reduced the development team’s workload by developing UX features with React Native <br/> <br/>
                        » Strengthened UI/UX design by identifying pain points in transaction flows and suggesting readability improvements based on user centered design <br/> <br/>
                        » Delivered an optimal experience for 5000+ users through regression, integration, and unit tests <br/>
                           </p>}

                        {this.state.experience === "UBC Solar" && <p>
                        » Designed a web app with HTML, CSS, and JavaScript to deliver telemetry data from a solar car for strategical analysis during competition <br/> <br/>
                        » Expanded the user base by creating a scalable frontend design
                           </p>}
                     </div>
                  </div>
               </div>
         </div>
      );
   }
}

export default Experience;
