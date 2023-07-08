import React from "react";
import ProjectBox from "./ProjectBox";
import StudyBuddyImg from "../img/projects/StudyBuddiesResize.png";
import StudyBuddyMobileImg from "../img/projects/StudyBuddiesResizeMobile.png";
import BouncingBlockImg from "../img/projects/BouncingBlockResized.png";
import JobTrackerImg from "../img/projects/JobTrackerResized.png";
import PugImg from "../img/projects/PUGResized.png";
import TechProjectImg from "../img/projects/TechProjectDashboard.png";
import JustcentImg from "../img/projects/Justcent.png";
import SpreloImg from "../img/projects/Sprelo.png";
import linkClicked from "../helpers/linkClicked";

const WEB = "Web";
const MOBILE = "Mobile";
const StudyBuddyDesc =
  "Study Buddies is a Web Application built in React.js that allows users to create their own flashcards and study them.";
const StudyBuddyTechStack = "React.js";
const StudyBuddyGitHubLink = "https://github.com/m1771vw/StudyBuddies";
const StudyBuddyLiveLink = "https://github.com/m1771vw/StudyBuddies";
const StudyBuddyImgs = [StudyBuddyImg];
const StudyBuddyMobileDesc =
  "Study Buddies Mobile is a mobile application built in React Native that allows users to create their own flashcards and study them on the go!";
const StudyBuddyMobileTechStack = "React Native, Redux, MongoDB, Node.js";
const StudyBuddyMobileGitHubLink =
  "https://github.com/m1771vw/StudyBuddiesMobile";
const StudyBuddyMobileLiveLink =
  "https://github.com/m1771vw/StudyBuddiesMobile";
const StudyBuddyMobileImgs = [StudyBuddyMobileImg];
const BouncingBlockDesc =
  "Bouncing Blocks is a React Native game where players build trampolines to bounce blocks across the screen.";
const BouncingBlockTechStack =
  "React Native, React Native Game Engine, Physics.js";
const BouncingBlockGitHubLink =
  "https://github.com/m1771vw/bouncing-blocks-react-native";
const BouncingBlockLiveLink =
  "https://github.com/m1771vw/bouncing-blocks-react-native";
const BouncingBlockImgs = [BouncingBlockImg];
const JobTrackerDesc =
  "Job Tracker is a web application where users can store information on jobs they had applied and whom they contacted for that job to ease application history organization";
const JobTrackerTechStack = "React.js, Redux, PostgreSQL, C#, .NET Core";
const JobTrackerGitHubLink = "https://github.com/m1771vw/JobTracker";
const JobTrackerLiveLink = "https://github.com/m1771vw/JobTracker";
const JobTrackerImgs = [JobTrackerImg];
const PugDesc =
  "P.U.G is a React Native mobile application where gamers can enter group chat rooms to find fellow gamers to play with.";
const PugTechStack = "React Native, Redux, Node.js, ChatKit API";
const PugGitHubLink = "https://github.com/m1771vw/pug";
const PugLiveLink = "https://github.com/m1771vw/pug";
const PugImgs = [PugImg];
const JustcentDesc =
  "Justcent is a web application where people can effortlessly split their bill, find missing transactions, and see Venmo analytics.";
const JustcentTechStack =
  "Next.js, Typescript, Node.js, AWS (S3, Lambda, RDS), PostgreSQL";
const JustcentGitHubLink = "https://github.com/m1771vw/Justcent";
const JustcentLiveLink = "https://justcent.app";
const JustcentImgs = [JustcentImg];
const SpreloDesc =
  "Sprelo is a web application where users are able to create experients and get user feedback before any code needs to be written.";
const SpreloTechStack =
  "Next.js, Typescript, Node.js, Express.js, AWS (Beanstalk, S3, RDS), PostgreSQL";
const SpreloGitHubLink = "https://github.com/m1771vw/Sprelo";
const SpreloLiveLink = "https://sprelo.com";
const SpreloImgs = [SpreloImg];
const TechProjectDesc =
  "Project Tracker is a web application where users can log in and manage projects, assignments, and assigned hours for teammates.";
const TechProjectTechStack =
  "React.js, Redux, Semantic UI, Node.js, Express.js, bcryptjs, JWT, passport, PostgreSQL";
const TechProjectGitHubLink = "https://github.com/m1771vw/TechProject";
const TechProjectLiveLink = "https://github.com/m1771vw/TechProject";
const TechProjectImgs = [TechProjectImg];
// const StudyBuddyDesc = "Study Buddies is a Web Application built in React.js that allows users to create their own flashcards and study them.";
// const StudyBuddyTechStack = "React.js"
// const StudyBuddyLink = "https://github.com/m1771vw/StudyBuddies";
// const StudyBuddyImgs = [StudyBuddyImg];
const gitHubUrl = "https://github.com/m1771vw";

const Projects = () => {
  return (
    <div className="section-padding-top " id="project-section">
      <div className="section-margin-sides">
        <h2>Projects</h2>
        <div className="columns is-desktop row">
          <ProjectBox
            img={JustcentImg}
            tag={WEB}
            title="Justcent"
            desc={JustcentDesc}
            // gitHubLink={JustcentGitHubLink}
            liveLink={JustcentLiveLink}
            tech={JustcentTechStack}
            imgs={JustcentImgs}
            live={true}
          />
          <ProjectBox
            img={SpreloImg}
            tag={WEB}
            title="Sprelo"
            desc={SpreloDesc}
            // gitHubLink={SpreloGitHubLink}
            liveLink={SpreloLiveLink}
            tech={SpreloTechStack}
            imgs={SpreloImgs}
            live={true}
          />
        </div>
        <div className="columns is-desktop row">
          <ProjectBox
            img={PugImg}
            tag={MOBILE}
            title="P.U.G. (Pick Up Games)"
            desc={PugDesc}
            gitHubLink={PugGitHubLink}
            liveLink={PugLiveLink}
            tech={PugTechStack}
            imgs={PugImgs}
            live={false}
          />
          <ProjectBox
            img={TechProjectImg}
            tag={WEB}
            title="Project Tracker"
            desc={TechProjectDesc}
            gitHubLink={TechProjectGitHubLink}
            liveLink={TechProjectLiveLink}
            tech={TechProjectTechStack}
            imgs={TechProjectImgs}
            live={false}
          />
        </div>
        <div className="columns is-desktop row">
          <ProjectBox
            img={StudyBuddyImg}
            tag={WEB}
            title="Study Buddies"
            desc={StudyBuddyDesc}
            gitHubLink={StudyBuddyGitHubLink}
            liveLink={StudyBuddyLiveLink}
            tech={StudyBuddyTechStack}
            imgs={StudyBuddyImgs}
            live={false}
          />
          <ProjectBox
            img={StudyBuddyMobileImg}
            tag={MOBILE}
            title="Study Buddies Mobile"
            desc={StudyBuddyMobileDesc}
            gitHubLink={StudyBuddyMobileGitHubLink}
            liveLink={StudyBuddyMobileLiveLink}
            tech={StudyBuddyMobileTechStack}
            imgs={StudyBuddyMobileImgs}
            live={false}
          />
        </div>
        <div className="columns is-desktop row">
          <ProjectBox
            img={BouncingBlockImg}
            tag={MOBILE}
            title="Bouncing Blocks"
            desc={BouncingBlockDesc}
            gitHubLink={BouncingBlockGitHubLink}
            liveLink={BouncingBlockLiveLink}
            tech={BouncingBlockTechStack}
            imgs={BouncingBlockImgs}
            live={false}
          />
          <ProjectBox
            img={JobTrackerImg}
            tag={WEB}
            title="Job Tracker"
            desc={JobTrackerDesc}
            gitHubLink={JobTrackerGitHubLink}
            liveLink={JobTrackerLiveLink}
            tech={JobTrackerTechStack}
            imgs={JobTrackerImgs}
            live={false}
          />
        </div>
        <div
          onClick={(e) => {
            linkClicked(e, gitHubUrl);
          }}
          className="resume"
        >
          VIEW MY GITHUB
        </div>
      </div>
    </div>
  );
};

export default Projects;
