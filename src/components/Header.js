import React, { Component } from 'react';

class Header extends Component {
    state = {
        active: false
    }

    onHamburgerClicked = () => {
        this.setState({
            active: !this.state.active
        })
    }
    render() {
        let { active } = this.state;
        let { onHamburgerClicked } = this;
        return (
            <header className="hero-head header">
                <nav className="navbar">
                    <div className="container header-margin-sides">
                        <div className="navbar-brand">
                            <div className="navbar-item">
                                <div className="logo">WY.</div>
                            </div>
                            <a href="#" onClick={onHamburgerClicked} className={"menu-btn " + (active ? "active" : "")}><span></span></a>
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
        );
    }
};

export default Header;