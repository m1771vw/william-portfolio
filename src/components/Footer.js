import React from 'react';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
const Footer = () => {
    return (
        <footer id="footer-text" className ="section-footer">
            <div className="footer-text">©2018 WILLIAM YANG. ALL RIGHTS RESERVED.</div>
            <div>
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