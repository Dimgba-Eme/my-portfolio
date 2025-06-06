import React, { useState } from 'react'
import './navbar.scss'
import burger_menu from '../assets/icons/burger-menu.png'
import github_icon from '../assets/icons/github.png'
import linkedin_icon from '../assets/icons/linkedin.png'
import close_icon from '../assets/icons/icon-close.svg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [linkNav, setLinkNav] = useState("")
    return (
        <div className='navbar-container'>
            <div className='navbar-inner'>
                <div>
                    <img onClick={() => setIsOpen(!isOpen)} src={burger_menu} alt='burger menu' className='burger-menu' />
                </div>

                <div className='github-linkedin-container'>
                    <a href='https://github.com/Dimgba-Eme' target='_blank'><img src={github_icon} alt='Github icon' className='github-icon' /></a>
                    <a href='https://www.linkedin.com/in/dimgba-eme-4616a6111/' target='_blank'><img src={linkedin_icon} alt='linkedin icon' className='linkedin-icon' /></a>
                </div>

                <nav className={isOpen ? "isOpen" : ""} onClick={() => setIsOpen(!isOpen)}>
                    <div className='nav-links-container'>
                        <img onClick={() => setIsOpen(!isOpen)} src={close_icon} alt='close icon' className='close-icon' />
                        <ul className='nav-links-inner'>
                            <a href='#skills' onClick={() => setLinkNav("skills")} className={linkNav === "skills" ? "active" : ""}>Skills</a>
                            <a href='#projects' onClick={() => setLinkNav("projects")} className={linkNav === "projects" ? "active" : ""}>Projects</a>
                            <a href='#contact-me' onClick={() => setLinkNav("contact-me")} className={linkNav === "contact-me" ? "active" : ""}>Contact Me</a>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
