import React from 'react';
import {string, array} from 'prop-types';
// import IosBrowsersOutline from 'react-ionicons/lib/IosBrowsersOutline'

const SkillsBox = (props) => {
    let { title, skills } = props;
    return (
        <div className="column skill-box">
            <div className="circle">
                {/* <IosBrowsersOutline/> */}
                {props.children}
            </div>
            <div className="name">
                {title}
            </div>
            <p>{ skills.join(", ") }</p>
        </div>
    );
};

SkillsBox.propTypes = {
    title: string,
    skills: array
};

export default SkillsBox;