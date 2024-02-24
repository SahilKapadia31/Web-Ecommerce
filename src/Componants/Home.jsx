import React from 'react'
import Header from './Header/Header'
import CategoryBar from './Header/CategoryBar'
import Listing from './Body/Listing'
import Slider from './Body/Slider'
import Footer from './Footer/Footer'

const Home = () => {
    return (
        <div>
            <div className="mb-2 position-sticky top-0" style={{ zIndex: '999' }}>
                <Header />
                <CategoryBar />
            </div>
            <div className="mb-2">
                <Slider />
            </div>
            <Listing />
            <Footer />
        </div>
    )
}

export default Home