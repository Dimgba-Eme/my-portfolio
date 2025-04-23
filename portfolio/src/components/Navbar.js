import React, { useState } from 'react'
import './navbar.scss'
import burger_menu from '../assets/icons/burger-menu.png'
import github_icon from '../assets/icons/github.png'
import linkedin_icon from '../assets/icons/linkedin.png'
import close_icon from '../assets/icons/icon-close.svg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className='navbar-container'>
            <div className='navbar-inner'>
                <div>
                    <img src={burger_menu} alt='burger menu' className='burger-menu' />
                </div>

                <div className='github-linkedin-container'>
                    <a href='https://github.com/Dimgba-Eme' target='_blank'><img src={github_icon} alt='Github icon' className='github-icon' /></a>
                    <a href='https://www.linkedin.com/in/dimgba-eme-4616a6111/' target='_blank'><img src={linkedin_icon} alt='linkedin icon' className='linkedin-icon' /></a>
                </div>

                <div className='nav-links-container'>
                    <nav>
                        <img src={close_icon} alt='close icon' className='close-icon' />
                        <ul className='nav-links-inner'>
                            <a href='#skills' className='nav-link'>Skills</a>
                            <a href='#projects' className='nav-link'>Projects</a>
                            <a href='#contact' className='nav-link'>Contact Me</a>

                        </ul>
                    </nav>
                </div>

            </div>
        </section>
    )
}

export default Navbar
