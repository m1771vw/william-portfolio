import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ProjectModal from './ProjectModal';


const ProjectBox = props => {
    let { img, tag, title } = props;
    const [active, toggleActive] = useState(false);
    const projectBoxClicked = e => {
        toggleActive(!active);
    }
    return (
        <div  className="column is-half-desktop is-half-tablet box-image">
            <img onClick={projectBoxClicked} src={img} alt="Placeholder"/>
            <div className="tag-name">{tag}</div>
            <div onClick={projectBoxClicked} className="name">{title}</div>
            <ProjectModal projectBoxClicked={projectBoxClicked} active={active} />
        </div>
    );
};

ProjectBox.propTypes = {
    
};


export default ProjectBox;