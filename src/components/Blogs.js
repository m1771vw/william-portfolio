import React from 'react';

import BlogBox from './BlogBox';
import rnge from '../img/blogs/rnge.png';
import graphnodemongo from '../img/blogs/GraphQLNodeMongoResized.png';
const blog1Title = "My Journey with React Native Game Engine Part I: Starting the Project";
const blog1Description = "I created an addicting, intense platformer where players have to create trampolines to bounce boxes across the room. Click here to read Part 1 of how I learned to use React Native Game Engine!";
const blog1Link = "https://medium.com/@williamyang93/my-journey-with-react-native-game-engine-part-i-starting-the-project-bbebcd2ccf6";
const blog2Title = "My Journey with React Native Game Engine Part II: Adding Touch and Bounce";
const blog2Description = "I continue my React Native Game Engine tutorial with step-by-step examples on how to add touch and bounce to the game. Click here to read Part 2 of how I learned to use React Native Game Engine!";
const blog2Link = "https://medium.com/@williamyang93/my-journey-with-react-native-game-engine-part-ii-adding-touch-and-bounce-b9ae3fac06b9";
const blog3Title = "GraphQL + Apollo & MongoDB + Mongoose Part I";
const blog3Description = "I made a tutorial where we setup GraphQL with Node.js and MongoDB. Click here to read Part 1 of the tutorial!"
const blog3Link = "https://medium.com/@williamyang93/graphql-apollo-mongodb-mongoose-part-i-a727bb22f1f6";

const Blogs = () => {
    return (
        <div className="section-padding-top gray" id="blog-section">
            <div className="section-margin-sides">
                <h2>Blogs</h2>
                <div className="columns is-desktop row">
                    <BlogBox img={rnge}
                        title={blog1Title}
                        description={blog1Description}
                        link={blog1Link}
                    />
                    <BlogBox img={rnge}
                        title={blog2Title}
                        description={blog2Description}
                        link={blog2Link}
                    />
                    <BlogBox img={graphnodemongo}
                        title={blog3Title}
                        description={blog3Description}
                        link={blog3Link}
                    />
                </div>
            </div>
        </div>
    );
};

export default Blogs;