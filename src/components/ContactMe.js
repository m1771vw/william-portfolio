import React from 'react';
import { LogoGithub, LogoLinkedin, MailOutline } from 'react-ionicons';

const ContactMe = () => {
    return (
        <div className="section-padding-top " id="contact-me-section">
            <div className="section-margin-sides">
                <h2>Contact Me</h2>
                <a className="no-decor" href="https://mail.google.com/mail/?view=cm&fs=1&to=williamyang93@gmail.com" rel="noopener noreferrer" target="_blank">
                    <div className="vertical-center"><MailOutline fontSize="2.0rem" />  <span className="text-space">williamyang93@gmail.com</span></div>
                </a>
                <a className="no-decor" href="https://github.com/m1771vw/">
                    <div className="vertical-center"><LogoGithub fontSize="2.0rem" />  <span className="text-space">github.com/m1771vw</span></div>
                </a>
                <a className="no-decor" href="https://linkedin.com/in/williamyang93/">
                    <div className="vertical-center"><LogoLinkedin fontSize="2.0rem" /> <span className="text-space">linkedin.com/in/williamyang93</span></div>
                </a>
            </div>
        </div>
    );
};

export default ContactMe;



