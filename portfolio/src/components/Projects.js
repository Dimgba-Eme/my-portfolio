import React from 'react'
import './projects.scss'
import right_arrow from '../assets/icons/right-arrow.png'
import projects_list from '../assets/images/projects_list'

const Projects = () => {
    return (
        <section id='projects' className='projects-container'>
            <h1 className='projects-title'>PROJECTS</h1>
            <div className='projects-inner'>
                {projects_list.map((project, index) => {
                    return (
                        <div key={index} className='project-list'>
                            <img src={project.image} alt='project pic' className='project-pic' />
                            <div className='project-intro'>
                                <h1 className='project-name'>{project.name}</h1>
                                <p className='project-description'>{project.description}</p>
                                <div className='language-container'>
                                    <p className='react'>{project.language_one}</p>
                                    <p className='sass'>{project.language_two}</p>
                                </div>
                                <a href={project.github_link} target='_blank' className='project-link'>See more <span><img src={right_arrow} alt='right arrow' className='right-arrow' /></span></a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects
