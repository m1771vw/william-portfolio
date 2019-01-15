import React from 'react';
import Pdf from '../documents/William_Yang_Resume20190114.pdf';

const AboutMe = () => {
    return (
        <div className="section-padding-top" id="about-section">
            <div className="section-margin-sides">
                {/* For desktops, make Header even bigger */}
                {/* Make the fade in w/ React Reveal */}
                <h1>Hi, I'm William, <br />Full Stack Developer <br />From Orange County, California.</h1>
                <p>
                    Technology has never been more prominent in our lives than it is now. <br />
                    It's constantly transforming and it is my mission to evolve with it.
                    </p>

                    <a className="resume" href={Pdf} target="_blank">DOWNLOAD RESUME</a>


            </div>
        </div>
    );
};

export default AboutMe;