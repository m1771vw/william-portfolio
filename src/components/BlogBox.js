import React from 'react';
import PropTypes from 'prop-types';

import linkClicked from '../helpers/linkClicked';

const BlogBox = props => {
    let { img, title, description, link } = props;
    return (
        <div className="column is-one-third box-image">
            <img onClick={(e) => {linkClicked(e, link)}} src={img} alt="Placeholder"/>
            <div onClick={(e) => {linkClicked(e, link)}} className="name">
                {title}
            </div>
            <p onClick={(e) => {linkClicked(e, link)}}>
                {description}
            </p>
        </div>
    );
};

BlogBox.propTypes = {
    
};

export default BlogBox;