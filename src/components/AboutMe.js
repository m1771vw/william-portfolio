import React from 'react';

const AboutMe = () => {
    return (
        <div className="section-padding-top" id="about-section">
            <div className="section-margin-sides">
                {/* For desktops, make Header even bigger */}
                {/* Make the fade in w/ React Reveal */}
                <h1>Hi I'm William, <br />Full Stack Developer <br />From Orange County, California.</h1>
                    <p>
                        Technology has never been more prominent in our lives than it is now. <br/>
                        Technology is constantly transforming and it is my mission to evolve with it.
                    </p>
            </div>
        </div>
    );
};

export default AboutMe;