import React from 'react';
import PropTypes from 'prop-types';

const BlogBox = props => {
    return (
        <div className="column blog-box">
            <img alt='Placeholder'/>
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