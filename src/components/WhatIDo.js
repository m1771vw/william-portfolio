import React from 'react';
import SkillsBox from './SkillsBox';
import IosLaptop from 'react-ionicons/lib/IosLaptop';
import IosGlobeOutline from 'react-ionicons/lib/IosGlobeOutline';
import IosPhonePortrait from 'react-ionicons/lib/IosPhonePortrait';
const WhatIDo = () => {
    return (
        <div className="section-padding-top gray" id="whatido-section">
            <div className="section-margin-sides">
                <h2>What I Can Do</h2>
                <div className="columns is-desktop row">

                
                <SkillsBox title="Web Development"
                    skills={["HTML", "CSS", "JavaScript", "React"]}>
                    <IosLaptop fontSize="44px"/>
                </SkillsBox>

                <SkillsBox title="Back End Development"
                    skills={["C#", "SQL", "GraphQL"]}>
                    <IosGlobeOutline fontSize="44px"/>
                </SkillsBox>
                </div>
                <div className="columns is-desktop row">

                <SkillsBox title="Mobile Development"
                    skills={["iOS", "Swift", "React Native"]}>
                    <IosPhonePortrait fontSize="44px"/>
                </SkillsBox>
                </div>

            </div>
        </div>
    );
};

export default WhatIDo;