import React, { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
const Home = () => {

    useEffect(() => {
        document.title = "Dimgba Eme | Portfolio"
    }, [])
    return (
        <main>
            <Header />
            <Hero />
            <Skills />
            <Projects />
            <Footer />
        </main>
    )
}

export default Home
