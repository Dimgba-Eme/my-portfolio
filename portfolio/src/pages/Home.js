import React, { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
const Home = () => {

    useEffect(() => {
        document.title = "Dimgba Eme | Portfolio"
    }, [])
    return (
        <main>
            <Header />
            <Hero />
        </main>
    )
}

export default Home
