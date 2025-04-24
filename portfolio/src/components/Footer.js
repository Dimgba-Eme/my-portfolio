import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <footer id='contact-me' className='footer-container'>
            <div className='footer-inner'>
                <h1 className='dev-name'>DIMGBA AGWU EME</h1>
                <div className='contact-container'>
                    <h1 className='contact-title'>Contact Me</h1>
                    <p>Email: hello@dimgbaeme.com.ng</p>
                    <p>Phone: +234 708 549 5430</p>
                </div>
            </div>
            <p className='rights'>All rights reserved by Dimgba Agwu Eme, 2025.</p>
        </footer>
    )
}

export default Footer
