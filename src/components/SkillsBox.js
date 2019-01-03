import React from 'react';
import {String, Array} from 'prop-types';
// import IosBrowsersOutline from 'react-ionicons/lib/IosBrowsersOutline'

const SkillsBox = (props) => {
    let { title, skills } = props;
    return (
        <div className="column skill-box">
            <div className="circle">
                {/* <IosBrowsersOutline/> */}
                {props.children}
            </div>
            <div class="name">
                {title}
            </div>
            { skills.join(", ") }
        </div>
    );
};

SkillsBox.propTypes = {
    title: String,
    skills: Array
};

export default SkillsBox;