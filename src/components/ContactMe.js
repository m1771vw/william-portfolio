import React from 'react';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
const ContactMe = () => {
    return (
        <div className="section-padding-top "id="contact-me-section">
        <div className="section-margin-sides">
            <h2>Contact Me </h2>
            <a href="https://github.com/m1771vw/">
                <span><LogoGithub fontSize="2.0rem"/></span>
            </a>
            <a href="https://linkedin.com/in/williamyang93/">
                <span><LogoLinkedin fontSize="2.0rem"/></span>
            </a>
        </div>
        </div>
    );
};

export default ContactMe;