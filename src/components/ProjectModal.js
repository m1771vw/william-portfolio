import React from 'react';

const ProjectModal = (props) => {
    let {active, projectBoxClicked} = props;
    return (
        <div className={"modal " + (active ? "is-active" : "")}>
        <div onClick={projectBoxClicked} className="modal-background"></div>
        <div className="modal-card">
            <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button onClick={projectBoxClicked} className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
            </section>
            <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button onClick={projectBoxClicked} className="button">Cancel</button>
            </footer>
        </div>
        </div>
    );
};

export default ProjectModal;