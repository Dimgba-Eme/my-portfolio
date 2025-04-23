import React from 'react'
import './hero.scss'
import Profile_img from '../assets/images/profile-img.jpg'
import location_icon from '../assets/icons/location.png'

const Hero = () => {
    return (
        <section className='hero-container'>
            <div className='hero-inner'>
                <img src={Profile_img} alt='profile pic' className='profile-img' />

                <div className='location-container'>
                    <img src={location_icon} alt='location icon' className='location-icon' />
                    <p className='location-title'>Abia, Nigeria</p>
                </div>
            </div>
        </section>
    )
}

export default Hero
