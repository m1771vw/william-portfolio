import React from 'react';
import ProjectBox from './ProjectBox';
const Projects = () => {
    return (
        <div className="section-padding-top " id="project-section">
        <div className="section-margin-sides">
            <h2>Projects</h2>
            <div className="row">
                <ProjectBox/>
                <ProjectBox/>
            </div>
            <div className="row">
                <ProjectBox/>
                <ProjectBox/>
            </div>
            

                {/* Study Buddies
                Study Buddies Mobile
                Bouncing Blocks
                <p>Job Tracker</p> */}
        </div>
        </div>
    );
};

export default Projects;