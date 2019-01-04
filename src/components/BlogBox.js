import React from 'react';
import PropTypes from 'prop-types';
import work from '../img/work1.jpg';

const BlogBox = props => {
    return (
        <div className="column blog-box">
            <img src={work} alt="Placeholder"/>

            <div>
                My Journey With React Native
            </div>
            <div>
                This is my blog post!
            </div>
        </div>
    );
};

BlogBox.propTypes = {
    
};

export default BlogBox;