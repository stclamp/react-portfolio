import './Skills.scss';
import {useState} from "react";

const Skills = ({skills, isActive}) => {

    const [skillsIsActive, skillsSetIsActive] = useState(false)

    return (
        <div className={isActive ? 'skills active' : 'skills'}>
            <div className="container">
                <h2 className="skills_title">Skills</h2>
                <h5 className="skills_stack">Technology & languages</h5>
                <div className="skills_icons">
                    {skills.map((skill, i) => (
                        <div key={i} onClick={() => skillsSetIsActive(!skillsIsActive)} className={skillsIsActive ? 'skills_icon active' : 'skills_icon'}>
                            {skill.svg}
                            <div className='skills_descr'>{skill.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;