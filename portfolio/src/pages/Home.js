import React, { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
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
        </main>
    )
}

export default Home
