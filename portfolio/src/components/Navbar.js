import React from 'react'
import './navbar.scss'
import burger_menu from '../assets/icons/burger-menu.png'
import github_icon from '../assets/icons/github.png'
import linkedin_icon from '../assets/icons/linkedin.png'

const Navbar = () => {
    return (
        <section className='navbar-container'>
            <div className='navbar-inner'>
                <div>
                    <img src={burger_menu} alt='burger menu' className='burger-menu' />
                </div>

                <div>
                    <a href='https://github.com/Dimgba-Eme' target='_blank'><img src={github_icon} alt='Github icon' className='github-icon' /></a>
                    <a href='https://www.linkedin.com/in/dimgba-eme-4616a6111/' target='_blank'><img src={linkedin_icon} alt='linkedin icon' className='linkedin-icon' /></a>
                </div>

            </div>
        </section>
    )
}

export default Navbar
