import React from 'react'
import './navbar.scss'
import burger_menu from '../assets/icons/burger-menu.png'

const Navbar = () => {
    return (
        <section className='navbar-container'>
            <div className='navbar-inner'>
                <div>
                   <img src={burger_menu} alt='burger menu' className='burger-menu' />
                </div>

            </div>
        </section>
    )
}

export default Navbar
