import React from 'react';
import PropTypes from 'prop-types';


const BlogBox = props => {
    let { img, title, description } = props;
    return (
        <div className="column is-one-third box-image">
            <img src={img} alt="Placeholder"/>
            <div className="name">
                {title}
            </div>
            <p>
                {description}
            </p>
        </div>
    );
};

BlogBox.propTypes = {
    
};

export default BlogBox;