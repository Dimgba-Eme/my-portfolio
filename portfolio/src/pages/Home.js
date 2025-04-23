import React, { useEffect } from 'react'
import Header from '../components/Header'
const Home = () => {

    useEffect(() => {
        document.title = "Dimgba Eme | Portfolio"
    }, [])
    return (
        <main>
            <Header />
        </main>
    )
}

export default Home
