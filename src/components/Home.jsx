import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Service from './Service'
import Footer from './Footer'

const Home = () => {
    return (
        <div className='mt-0'>
            <Navbar />
            <Banner />
            <Service />
            <Footer />
        </div>
    )
}

export default Home
