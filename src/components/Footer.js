import React from 'react';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import IosMailOutline from 'react-ionicons/lib/IosMailOutline';
const Footer = () => {
    return (
        <footer id="footer-text" className ="section-footer">
            <div className="footer-text">©2018 WILLIAM YANG.</div>
            <div id="contact-me-section">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=williamyang93@gmail.com"  rel="noopener noreferrer" target="_blank">
                <span><IosMailOutline fontSize="2.0rem"/></span>
            </a>
            <a href="https://github.com/m1771vw/">
                <span><LogoGithub fontSize="2.0rem"/></span>
            </a>
            <a href="https://linkedin.com/in/williamyang93/">
                <span><LogoLinkedin fontSize="2.0rem"/></span>
            </a>
            </div>
        </footer>
    );
};

export default Footer;