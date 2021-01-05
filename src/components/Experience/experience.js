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
               <div className="experience-content">
                  <div className="experience-titles">
                        <h1>Experience</h1>
                        <div className="experience-companies">
                           <div className={this.state.experience === "SAP" ? "experience-selected" : "experience-company"} onClick={() => {
                              this.selectExperience("SAP");
                           }}>
                              SAP
                           </div>

                           <div className={this.state.experience === "Perk Labs" ? "experience-selected" : "experience-company"} onClick={() => {
                              this.selectExperience("Perk Labs");
                           }}>
                              Perk Labs
                           </div>

                           <div className={this.state.experience === "UBC Solar" ? "experience-selected" : "experience-company"} onClick={() => {
                              this.selectExperience("UBC Solar");
                           }}>
                              UBC Solar
                           </div>
                        </div>
                     </div>
                     <div className="experience-text">
                        {this.state.experience === "SAP" && <div>
                           <h1>Software Developer Intern @ SAP</h1>
                           <h2>September 2020  -  April 2021</h2>
                           <p>
                              ⊷ Architecting an automated Python artifact pipeline to migrate artifacts to AWS and Alicloud to enable developer workflows for a multimillion dollar project <br/> <br/>
                              ⊷ Producing extensive documentation for design, testing, and integration into production environments; justifying benefits of design with respect to various user and time requirements <br/> <br/>
                              ⊷ Maintaining Java microservice by resolving production bugs; migrating functionality from deprecated dependencies <br/> <br/>
                              ⊷ Validating system deployments by developing basic acceptance tests and load tests with Python and Locust 
                              </p>   
                        </div> }
                        
                        {this.state.experience === "Perk Labs" && <div>
                           <h1>QA Engineer Intern @ Perk Labs</h1>
                           <h2>July 2020  -  August 2020</h2>
                           <p>
                           ⊷ Reduced the development team’s workload by developing UX features with React Native <br/> <br/>
                           ⊷ Strengthened UI/UX design by identifying pain points in transaction flows and suggesting readability improvements based on user centered design <br/> <br/>
                           ⊷ Delivered an optimal experience for 5000+ users through regression, integration, and unit tests <br/>
                           </p>   
                        </div>}

                        {this.state.experience === "UBC Solar" && <div> 
                           <h1>Software Developer @ UBC Solar</h1>
                           <h2>September 2019  -  April 2020</h2>
                           <p>
                           ⊷ Designed a web app with HTML, CSS, and JavaScript to deliver telemetry data from a solar car for strategical analysis during competition <br/> <br/>
                           ⊷ Expanded the user base by creating a scalable frontend design
                           </p> 
                        </div>}
                     </div>
                  </div>
               </div>
         </div>
      );
   }
}

export default Experience;
