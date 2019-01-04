import React from 'react';
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

const HeroSection = () => {
    return (
        <div className="hero-body full-height">
            <div className="container has-text-centered">
            <div className="title">
                <div className="animated-typing-container"><span className="title-padding">I</span> {AnimatedTypingComponent()}</div>
            </div>
            </div>
        </div> 
    );
}
export default HeroSection;