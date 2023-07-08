import React from "react";
import { TypeAnimation } from "react-type-animation";

const AnimatedTypingComponent = () => (
  //   <TypeAnimation loop speed={75}>
  //     <span>DESIGN.</span>
  //     <Backspace count={7} delay={750} />
  //     <span>DEVELOP.</span>
  //     <Backspace count={8} delay={750} />
  //     <span>ANALYZE.</span>
  //     <Backspace count={8} delay={750} />
  //     <span>DEBUG.</span>
  //     <Backspace count={6} delay={750} />
  //     <span>IMPROVE.</span>
  //     <Backspace count={8} delay={750} />
  //     <Reset delay={750} />
  //   </TypeAnimation>
  <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed out once, initially
      "I DESIGN.",
      1000, // wait 1s before replacing "Mice" with "Hamsters"
      "I DEVELOP.",
      1000,
      "I ANALYZE.",
      1000,
      "I DEBUG.",
      1000,
      "I OPTIMIZE.",
      1000,
    ]}
    wrapper="span"
    speed={15}
    style={{ fontSize: "0.8em", display: "inline-block" }}
    repeat={Infinity}
  />
);

const HeroSection = () => {
  return (
    <div className="hero-body full-height">
      <div className="container has-text-centered">
        {/* <img src={background}/> */}
        <div className="title">
          <div className="animated-typing-container">
            {AnimatedTypingComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
