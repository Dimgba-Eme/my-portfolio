import React from 'react'
import './skills.scss'
import skills_list from '../assets/images/skills_list'

const Skills = () => {
    return (
        <section id='skills' className='skills-container'>
            <h1 className='skills-title'>SKILLS</h1>
            <div className='skills-inner'>
                {skills_list.map((skill, index) => {
                    return (
                        <div className='skills-list' key={index}>
                            <img src={skill.icon} alt='skill icon' className='skill-icon' />
                            <h1 className='skill-name'>{skill.name}</h1>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Skills
