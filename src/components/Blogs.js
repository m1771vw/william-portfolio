import React from 'react';
import BlogBox from './BlogBox';
import rnge from '../img/blogs/rnge.png';
import graphnodemongo from '../img/blogs/GraphQLNodeMongoResized.png';
const blog1Title = "My Journey with React Native Game Engine Part I: Starting the Project";
const blog1Description = "I created an addicting, intense platformer where players have to create trampolines to bounce boxes across the room. Click here to read Part 1 of how I leared to use React Native Game Engine!";
const blog2Title = "My Journey with React Native Game Engine Part II: Adding Touch and Bounce";
const blog2Description = "I continue my React Native Game Engine tutorial with step-by-step examples on how to add touch and bounce to the game. Click here to read Part 2 of how I leared to use React Native Game Engine!";
const blog3Title = "GraphQL + Apollo & MongoDB + Mongoose Part I";
const blog3Description = "I made a tutorial where we setup GraphQL with Node.js and MongoDB. Click here to read Part 1 of the tutorial!"
const Blogs = () => {
    return (
        <div className="section-padding-top gray" id="blog-section">
            <div className="section-margin-sides">

                <h2>Blogs</h2>
                <div className="columns is-desktop row">
                    <BlogBox img={rnge}
                        title={blog1Title}
                        description={blog1Description}
                    />
                    <BlogBox img={rnge}
                        title={blog2Title}
                        description={blog2Description}
                    />
                    <BlogBox img={graphnodemongo}
                        title={blog3Title}
                        description={blog3Description}
                    />

                </div>

            </div>
        </div>
    );
};

export default Blogs;