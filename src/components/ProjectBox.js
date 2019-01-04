import React from 'react';
import PropTypes from 'prop-types';
import work from '../img/projects/BouncingBlockResized.png';
const ProjectBox = props => {
    let { img, tag, title } = props;
    return (
        <div class="column is-half-desktop is-half-tablet box-image">
            <img src={img} alt="Placeholder"/>
            <div className="tag-name">{tag}</div>
            <div className="name">{title}</div>
        </div>
    );
};

ProjectBox.propTypes = {
    
};


export default ProjectBox;