import React, { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
    const [active, setActive] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const scrollTopRef = useRef(scrollTop);
    const handleScroll = () => {
        let pageYOffSet = window.pageYOffset;
        setScrollTop(pageYOffSet);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);

        };
    });

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <header ref={scrollTopRef} onScroll={handleScroll} className="hero-head header">

            <nav className="navbar">
                <div className={"container header-margin-sides " + (scrollTop > 50 ? " filled" : "")}>
                    <div className="navbar-brand">
                        <div className="navbar-item">
                            <div onClick={scrollToTop} className={"logo " + (scrollTop > 50 ? " filled-text" : "")}>WY.</div>
                        </div>
                        <div href="#" onClick={() => setActive(!active)} className={"menu-btn " + (active ? "active" : "") + (scrollTop > 50 ? " filled" : "")}><span></span></div>
                    </div>
                    {/* <div id="navbarMenuHeroA" className={"navbar-menu " + (active ? "active" : "")}> */}
                    <div id="navbarMenuHeroA" className={"new-navbar " + (active ? "active white" : "")}>
                        {/* <div id="navbarMenuHeroA" className="new-nav-bar"> */}
                        <div className="navbar-end">
                            <div className={"navbar-item " + (scrollTop > 50 ? " filled-text" : "white-font")}>
                                <Link
                                    activeClass="active"
                                    to="about-section"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                >About</Link>
                            </div>
                            <div className={"navbar-item " + (scrollTop > 50 ? " filled-text" : "white-font")}>
                                <Link
                                    activeClass="active"
                                    to="whatido-section"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                >What I Do</Link>
                            </div>
                            <div className={"navbar-item " + (scrollTop > 50 ? " filled-text" : "white-font")}>
                                <Link
                                    activeClass="active"
                                    to="project-section"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                >Projects</Link>
                            </div>
                            <div className={"navbar-item " + (scrollTop > 50 ? " filled-text" : "white-font")}>
                                <Link
                                    activeClass="active"
                                    to="blog-section"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                >Blog</Link>
                            </div>
                            <div className={"navbar-item " + (scrollTop > 50 ? " filled-text" : "white-font")}>
                                <Link
                                    activeClass="active"
                                    to="contact-me-section"
                                    spy={true}
                                    smooth={true}
                                    offset={60}
                                    duration={500}
                                >Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;