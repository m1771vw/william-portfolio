import React from 'react';
import PropTypes from 'prop-types';
import work from '../img/projects/StudyBuddiesResize.png';
const ProjectBox = props => {
    return (
        <div class="column is-half-desktop is-half-tablet project-box">
            <img src={work} alt="Placeholder"/>
            <p>Tag</p>
            <p>Title</p>
        </div>
    );
};

ProjectBox.propTypes = {
    
};


export default ProjectBox;