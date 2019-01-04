import React from 'react';
import ProjectBox from './ProjectBox';
import StudyBuddyImg from '../img/projects/StudyBuddiesResize.png';
import StudyBuddyMobileImg from '../img/projects/StudyBuddiesResizeMobile.png';
import BouncingBlockImg from '../img/projects/BouncingBlockResized.png';
import JobTrackerImg from '../img/projects/JobTrackerResized.png';
const Projects = () => {
    return (
        <div className="section-padding-top " id="project-section">
        <div className="section-margin-sides">
            <h2>Projects</h2>
            <div className="columns is-desktop row">
                <ProjectBox img={StudyBuddyImg} tag="Web" title="Study Buddies"/>
                <ProjectBox img={StudyBuddyMobileImg} tag="Mobile" title="Study Buddies Mobile"/>
            </div>
            <div className="columns is-desktop row">
                <ProjectBox img={BouncingBlockImg} tag="Mobile" title="Bouncing Blocks"/>
                <ProjectBox img={JobTrackerImg} tag="Web" title="Job Tracker"/>
            </div>
            
        </div>
        </div>
    );
};

export default Projects;