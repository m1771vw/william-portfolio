import React, {useState} from 'react';
import {string, bool, array} from 'prop-types';
import ProjectModal from './ProjectModal';


const ProjectBox = props => {
    let { img, tag, title, desc, gitHubLink, liveLink, imgs, tech, live } = props;
    const [active, toggleActive] = useState(false);
    const projectBoxClicked = e => {
        toggleActive(!active);
    }
    return (
        <div className="column is-half-desktop is-half-tablet box-image">
            <img onClick={projectBoxClicked} src={img} alt="Placeholder"/>
            <div onClick={projectBoxClicked} className="tag-name">{tag}</div>
            <div onClick={projectBoxClicked} className="name">{title}</div>
            <ProjectModal projectBoxClicked={projectBoxClicked} 
                          active={active}
                          tag={tag}
                          title={title}
                          desc={desc}
                          gitHubLink={gitHubLink}
                          liveLink={liveLink}
                          imgs={imgs}
                          tech={tech} 
                          live={live}
                          />
        </div>
    );
};

ProjectBox.propTypes = {
    img: string,
    tag: string,
    title: string,
    desc: string,
    gitHubLink: string,
    liveLink: string,
    imgs: array,
    tech: string,
    live: bool
};


export default ProjectBox;