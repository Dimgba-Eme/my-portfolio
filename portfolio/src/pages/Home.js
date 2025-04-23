import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'

const Home = () => {

    useEffect(() => {
        document.title = "Dimgba Eme | Portfolio"
    }, [])
    return (
        <main>
            <Navbar />
        </main>
    )
}

export default Home
