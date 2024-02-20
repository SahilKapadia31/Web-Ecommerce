import React from 'react'
import Header from './Header/Header'
import CategoryBar from './Header/CategoryBar'
import Listing from './Body/Listing'

const Home = () => {
    return (
        <div>
            <Header />
            <CategoryBar />
            <Listing />
        </div>
    )
}

export default Home