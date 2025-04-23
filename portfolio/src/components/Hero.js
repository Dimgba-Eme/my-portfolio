import React from 'react'
import './hero.scss'
import Profile_img from '../assets/images/profile-img.jpg'

const Hero = () => {
  return (
    <section className='hero-container'>
     <div className='hero-inner'>
       <img src={Profile_img} alt='profile pic' className='profile-img' />
     </div>
    </section>
  )
}

export default Hero
