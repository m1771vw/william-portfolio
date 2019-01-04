import React from 'react';
import PropTypes from 'prop-types';
import work from '../img/projects/BouncingBlockResized.png';
const ProjectBox = props => {
    let { img, tag, title } = props;
    return (
        <div class="column is-half-desktop is-half-tablet project-box">
            <img src={img} alt="Placeholder"/>
            <p>{tag}</p>
            <p>{title}</p>
        </div>
    );
};

ProjectBox.propTypes = {
    
};


export default ProjectBox;