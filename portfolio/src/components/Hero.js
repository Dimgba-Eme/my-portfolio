import React from 'react'
import './hero.scss'
import Profile_img from '../assets/images/profile-img.jpg'
import location_icon from '../assets/icons/location.png'

const Hero = () => {
    return (
        <section className='hero-container'>
            <div className='hero-inner'>
                <img src={Profile_img} alt='profile pic' className='profile-img' />
                <h3 className='profile-name'>Hello, I'm Dimgba!</h3>

                <div className='location-container'>
                    <img src={location_icon} alt='location icon' className='location-icon' />
                    <p className='location-title'>Abia, Nigeria.</p>
                </div>

                <h1 className='intro'>A Full-Stack developer specialized in React for Front-End & Python, Django and MySQL for Back-End development, <span className='expertise'>with more expertise in Front-End!</span></h1>
            </div>
        </section>
    )
}

export default Hero
