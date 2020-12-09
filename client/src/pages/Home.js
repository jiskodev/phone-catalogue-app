import React from 'react'
import Header from '../components/Header'
import PhonesContainer from '../components/PhonesContainer'
import TransitionContainer from '../components/TransitionContainer'

function Home() {
    return (
        <>
            <TransitionContainer />
            <Header />
            <PhonesContainer />
        </>
    )
}

export default Home
