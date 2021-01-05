import React from 'react';
import './projects.css';

import Project from '../Project/project';
import ArchivedProject from '../ArchivedProject/archivedProject';

import CurrenSee from '../../images/CurrenSee.png';
import pilldex from '../../images/pilldex.png';
import FOEX from '../../images/FOEX.png';
import ImageStash from '../../images/ImageStash.png';


class Projects extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         projectSelect: "Featured",
         projectsList: [
            {title: "ImageStash", description: "An image repository to allow users to store their images. Login with you Google account and easily manage your images.", technologies: "React - Express - S3 - MongoDB Atlas", image: ImageStash, link: "http://ec2-3-96-142-166.ca-central-1.compute.amazonaws.com:3000", github: "https://github.com/mpchow/Image-Stash", portrait: false},
            {title: "pilldex", description: "A centralized pill management app with that dynamically adapts reminders based on your habits. Always be in the loop with what pills you have to take today and know when you need to refill. I built out the backend alongside a teammate in a team of four.", technologies: "Express - Jest - EC2", image: pilldex, github: "https://github.com/mpchow/pilldex", portrait: true},
            {title: "CurrenSee", description: "A currency visualizer that allows users to analyze historical conversion rates. You can also quickly calculate the current amount from one currency to another.", technologies: "React - Chart.js - Exchange Rates API", image: CurrenSee, link: "https://currensee.netlify.app/", github: "https://github.com/mpchow/CurrenSee", portrait: false},
            {title: "FOEX", description: "A expiry date tracker that aims to mitigate food waste. You take a picture with the app and it will automatically recognize the food object and give an estimated expiry date. Built during nwHacks 2020 and won the Wolfram Alpha Award for placing in the top 35/145.", technologies: "Java - Microsoft Computer Vision API", image: FOEX, github: "https://github.com/mpchow/FOEX_nwHacks2020", portrait: true},
         ],
         projectsArchive: [
            {title: "Expense Tracker", description: "An app to help manage your expenses by different categories.", technologies: "React - Express - MongoDB Atlas", github: "https://github.com/mpchow/ExpenseTracker"},
            {title: "Early Bird VSCode Theme", description: "My take on a light VSCode theme. Available on the VSCode Marketplace Feel free to blind yourself.", technologies: "VSCode", link: "https://marketplace.visualstudio.com/items?itemName=mpchow.early-bird", github: "https://github.com/mpchow/early-bird_vscodeTheme"},
            {title: "AutonomousRobot-AndroidApp", technologies: "Python - Java", description: "A robot built with a Raspberry Pi, servo motors, and light sensors. Automatically follows a line, and can be controlled manually through a corresponding Android App.", github: "https://github.com/mpchow/AutonomousRobot-AndroidApp"},
            {title: "Personal Website V1", description: "My first iteration of my personal website. It wasn't too long ago but I've come a long way since.", technologies: "JavaScript - HTML - CSS", link: "https://matthewchowv1.netlify.app", github: "https://github.com/mpchow/personalWebsite_V1"},
            {title: "Ecommerce Marketplace", technologies: "React - Express", description: "Built to serve local business, Ecommerce MarketPlace serves to be a central hub to find local shops and have genuine connections with the shop owners over video calls.", github: "https://github.com/mpchow/Ecommerce-Marketplace"},
            {title: "UBCNav", technologies: "Java - Google Maps API", description: "An Android App built during UBC Local Hack Day 2019. A central hub for UBC students. Find notable places and get accommodative routing around campus.", github: "https://github.com/mpchow/UBCNav_LocalHackDay2019"},
         ]
      };
   }

   setView(projectType) {
      this.setState({projectSelect: projectType});
   }

   render() {
      return (
         <div className="projects">
            <div className="projects-header">
               <h1 className="projects-title">Projects</h1> 
               <div className="projects-category">
                  <p className={this.state.projectSelect === "Featured" ? "projects-category-selected" : null} onClick={() => {this.setView("Featured")}}>Featured</p>
                  <p className={this.state.projectSelect === "Archive" ? "projects-category-selected" : null} onClick={() => {this.setView("Archive")}}>Archive</p>
               </div>
            </div>

            {this.state.projectSelect === "Featured" ? <div className="projects-box">{this.state.projectsList.map( project => <Project details={project}/>)}</div> : <div className="projects-archive">{this.state.projectsArchive.map( project => <ArchivedProject details={project}/>)}</div>}
         </div>
      );
   }
}

export default Projects;