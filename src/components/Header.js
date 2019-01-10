import React, { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


const headerItemClicked = e => {
    console.log(e.target.innerText);
}

const Header = () => {
    const [active, setActive] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const scrollTopRef = useRef(scrollTop);
    const handleScroll = () => {
        let pageYOffSet = window.pageYOffset;
        setScrollTop(pageYOffSet);
        console.log("State: ", scrollTop);
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
    const scrollToBottom = () => {
        scroll.scrollToBottom();
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
                            <div onClick={scrollToBottom} className={"navbar-item " + (scrollTop > 50 ? " filled-text" : "white-font")}>
                                Contact
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

// import React, { Component } from 'react';

// class Header extends Component {
//     state = {
//         active: false
//     }

//     onHamburgerClicked = () => {
//         this.setState({
//             active: !this.state.active
//         })
//     }
//     render() {
//         let { active } = this.state;
//         let { onHamburgerClicked } = this;
//         return (
//             <header className="hero-head header">
//                 <nav className="navbar">
//                     <div className="container header-margin-sides">
//                         <div className="navbar-brand">
//                             <div className="navbar-item">
//                                 <div className="logo">WY.</div>
//                             </div>
//                             <a href="#" onClick={onHamburgerClicked} className={"menu-btn " + (active ? "active" : "")}><span></span></a>
//                         </div>
//                         <div id="navbarMenuHeroA" className="navbar-menu">
//                             <div className="navbar-end">
//                                 <div className="navbar-item is-active">
//                                     About
//                                 </div>
//                                 <div className="navbar-item">
//                                     What I Do
//                                 </div>
//                                 <div className="navbar-item">
//                                     Projects
//                                 </div>
//                                 <div className="navbar-item">
//                                     Blog
//                                 </div>
//                                 <div className="navbar-item">
//                                     Contact
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </nav>
//             </header>
//         );
//     }
// };

export default Header;