import React from "react";
import SkillsBox from "./SkillsBox";
import {
  BriefcaseOutline,
  GlobeOutline,
  Laptop,
  PhonePortrait,
} from "react-ionicons";

const WhatIDo = () => {
  return (
    <div className="section-padding-top gray" id="whatido-section">
      <div className="section-margin-sides">
        <h2>What I Do</h2>
        <div className="columns is-desktop row">
          <SkillsBox
            title="Web Development"
            skills={[
              "HTML5",
              "CSS3",
              "Javascript, ES6",
              "React",
              "Redux",
              "Typescript",
            ]}
          >
            <Laptop fontSize="44px" />
          </SkillsBox>
          <SkillsBox
            title="Back End Development"
            skills={[
              "Node.js",
              "Express.js",
              "Nest.js",
              "Koa.js",
              "C#",
              ".NET Core",
              "Java",
              "MSSQL",
              "PostgreSQL",
              "GraphQL",
              "Oracle",
              "MongoDB",
            ]}
          >
            <GlobeOutline fontSize="44px" />
          </SkillsBox>
        </div>
        <div className="columns is-desktop row">
          <SkillsBox
            title="Mobile Development"
            skills={["iOS", "SwiftUI", "React Native"]}
          >
            <PhonePortrait fontSize="44px" />
          </SkillsBox>
          <SkillsBox
            title="Other Tools"
            skills={[
              "Git",
              "RESTful API",
              "Docker",
              "OAuth 2.0",
              "SAFe5 Certified",
            ]}
          >
            <BriefcaseOutline fontSize="44px" />
          </SkillsBox>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
