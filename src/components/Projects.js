import React from 'react';
import ProjectBox from './ProjectBox';
import StudyBuddyImg from '../img/projects/StudyBuddiesResize.png';
import StudyBuddyMobileImg from '../img/projects/StudyBuddiesResizeMobile.png';
import BouncingBlockImg from '../img/projects/BouncingBlockResized.png';
import JobTrackerImg from '../img/projects/JobTrackerResized.png';
import PugImg from '../img/projects/PUGResized.png'


const WEB = "Web";
const MOBILE = "Mobile";
const StudyBuddyDesc = "Test Desc";
const StudyBuddyLink = "test link";
const StudyBuddyImgs = [];

const Projects = () => {
    return (
        <div className="section-padding-top " id="project-section">
            <div className="section-margin-sides">
                <h2>Projects</h2>
                
                <div className="columns is-desktop row">
                    <ProjectBox img={StudyBuddyImg} 
                                tag={WEB} 
                                title="Study Buddies" 
                                desc={StudyBuddyDesc}
                                link={StudyBuddyLink}
                                imgs={StudyBuddyImg}
                                />
                    <ProjectBox img={StudyBuddyMobileImg} 
                                tag={MOBILE} 
                                title="Study Buddies Mobile" 
                                desc=""
                                link=""
                                imgs=""
                                />
                </div>
                <div className="columns is-desktop row">
                    <ProjectBox img={BouncingBlockImg} 
                                tag={MOBILE} 
                                title="Bouncing Blocks" 
                                desc=""
                                link=""
                                imgs=""
                                />
                    <ProjectBox img={JobTrackerImg} 
                                tag={WEB} 
                                title="Job Tracker" 
                                desc=""
                                link=""
                                imgs=""
                                />
                </div>
                <div className="columns is-desktop row">
                    <ProjectBox img={PugImg} 
                                tag={MOBILE} 
                                title="P.U.G. (Pick Up Games)" 
                                desc=""
                                link=""
                                imgs=""
                                />

                </div>

            </div>
        </div>
    );
};

export default Projects;