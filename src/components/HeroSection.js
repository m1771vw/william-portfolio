import React, { Component } from 'react';
import Typing, { Backspace, Reset } from 'react-typing-animation';


const AnimatedTypingComponent = () => (
    <Typing loop speed={50}>
                {"DESIGN."}
                <Backspace count={7} delay={750} />
                {"DEVELOP."}
                <Backspace count={8} delay={750} />
                {"TEST."}
                <Backspace count={5} delay={750} />
                {"DEBUG."}
                <Backspace count={6} delay={750} />
                {"IMPROVE."}
                <Backspace count={8} delay={750} />
                <Reset delay={750}/>
    </Typing>
  );

class HeroSection extends Component {
    state = {
        active: false
    }
    render() {
        let { active } = this.state;
        return (
            <div>
            <section className="hero is-link is-fullheight-with-navbar">
                <header className="hero-head header">
                    <nav className="navbar">
                    <div className="container header-margin-sides">
                        <div className="navbar-brand">
                        <div className="navbar-item">
                            <div className="logo">WY.</div>
                        </div>
                        <a href="#" className={"menu-btn " + (active ? "active" : "")}><span></span></a>
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
                </header>
            <div className="hero-body full-height">
                <div className="container has-text-centered">
                <div className="title">
                    <div className="animated-typing-container"><span className="title-padding">I</span> {AnimatedTypingComponent()}</div>
                </div>
                </div>
            </div> 
            </section> 
            </div>
        );
    };
}
export default HeroSection;