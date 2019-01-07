import React from 'react';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import IosGlobeOutline from 'react-ionicons/lib/IosGlobeOutline';

const ProjectModal = (props) => {
    let {active, projectBoxClicked, tag, title, desc, link, imgs} = props;
    return (
        <div className={"modal " + (active ? "is-active" : "")}>
        <div onClick={projectBoxClicked} className="modal-background"></div>
        <div className="modal-card">
            {/* <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
            </header> */}
            <button onClick={projectBoxClicked} className="delete upper-right" aria-label="close"></button>
            <img src={imgs[0]} alt="Projects"/>
            <section className="modal-card-body">
            {desc}
            </section>
            <footer className="modal-card-foot">
                <button className="button">
                    <LogoGithub/>
                    View Github
                </button>
                <button className="button">
                <IosGlobeOutline/> View Live!</button>
            </footer>
        </div>
        </div>
    );
};

export default ProjectModal;