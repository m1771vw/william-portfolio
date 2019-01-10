import React from 'react';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import IosGlobeOutline from 'react-ionicons/lib/IosGlobeOutline';

import linkClicked from '../helpers/linkClicked';

const ProjectModal = (props) => {
    let {active, projectBoxClicked, title, desc, gitHubLink, liveLink, imgs, tech, live} = props;
    return (
        <div className={"modal " + (active ? "is-active" : "")}>
        <div onClick={projectBoxClicked} className="modal-background"></div>
        <div className="modal-card">
            {/* <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
            </header> */}
            <button onClick={projectBoxClicked} className="delete upper-right" aria-label="close"></button>
            <section className="modal-card-body">
            <img src={imgs[0]} alt="Projects"/>
            <h4 className="underline">{title}</h4>
            <p>{desc}</p>
            <h5 className="underline">Tech Stack</h5>
            <p>{tech}</p>
            </section>
            <footer className="modal-card-foot">
                <button onClick={(e) => {linkClicked(e, gitHubLink)}} className="button">
                    <LogoGithub/>
                    View Github
                </button>
                <button onClick={(e) => {linkClicked(e, liveLink)}} className={"button " + (live ? "" : "not-live")}>
                <IosGlobeOutline/> View Live!</button>
            </footer>
        </div>
        </div>
    );
};

export default ProjectModal;