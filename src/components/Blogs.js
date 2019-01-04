import React from 'react';
import BlogBox from './BlogBox';
const Blogs = () => {
    return (
        <div className="section-padding-top gray" id="blog-section">
            <div className="section-margin-sides">

            <h2>Blogs</h2>
            <div className="row">
                <BlogBox/>
            </div>
            My Journey with React Native
            </div>
        </div>
    );
};

export default Blogs;