import React from 'react';

const HeroSection = () => {
    return (
        <div>
        <section className="hero is-link is-fullheight-with-navbar">
            <div className="hero-head">
                <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                    <div className="navbar-item">
                        <div className="logo">WY.</div>
                    </div>
                    <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    </div>
                    <div id="navbarMenuHeroA" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item is-active">
                            About 
                        </div>
                        <div className="navbar-item">
                            What I Do
                        </div>
                        <div className="navbar-item">
                            Projects
                        </div>
                        <div className="navbar-item">
                            Blog
                        </div>
                        <div className="navbar-item">
                            Contact
                        </div>
                    </div>
                    </div>
                </div>
                </nav>
            </div>
        <div className="hero-body">
            <div className="container has-text-centered">
            <h1 className="title">
                Title
            </h1>
            <h2 className="subtitle">
                Subtitle
            </h2>
            </div>
        </div>   
        </section> 
        </div>
    );
};

export default HeroSection;