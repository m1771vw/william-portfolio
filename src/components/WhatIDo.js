import React from 'react';
import SkillsBox from './SkillsBox';
import IosBrowsersOutline from 'react-ionicons/lib/IosBrowsersOutline';
import IosAnalyticsOutline from 'react-ionicons/lib/IosAnalyticsOutline';
import LogoAndroid from 'react-ionicons/lib/LogoAndroid';
const WhatIDo = () => {
    return (
        <div className="section-padding-top gray" id="whatido-section">
            <div className="section-margin-sides">
                <h2>What I Can Do</h2>
                <div className="columns is-desktop">

                
                <SkillsBox title="Web Development"
                    skills={["HTML", "CSS", "JavaScript", "React"]}>
                    <IosBrowsersOutline />
                </SkillsBox>

                <SkillsBox title="Back End Development"
                    skills={["C#", "SQL", "GraphQL"]}>
                    <IosAnalyticsOutline />
                </SkillsBox>

                <SkillsBox title="Mobile Development"
                    skills={["iOS", "Swift", "React Native"]}>
                    <LogoAndroid />
                </SkillsBox>
                </div>

            </div>
        </div>
    );
};

export default WhatIDo;