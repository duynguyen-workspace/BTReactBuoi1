import React from 'react'
import '../App.css'

const Banner = () => {
    return (
        <div className='container mt-5 px-5 text-center bg-body-tertiary rounded'>
            <div className="py-5">
                <h1 className='fw-bold mt-5'>A Warm Welcome</h1>
                <p className='px-5'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                <button className='bannerBtn btn btn-primary fs-5 mb-5'>Call to action</button>
            </div>
        </div>
    )
}

export default Banner
