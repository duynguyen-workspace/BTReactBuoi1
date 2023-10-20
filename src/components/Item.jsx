import React from 'react'

const Item = (props) => {
    const {icon, heading, desc} = props

    return (
        <div className='col-lg-4 py-4'>
            <div className="bg-body-tertiary m-0 py-5 px-4 position-relative">
                <div className="container">
                    <div className="icon bg-primary p-3 rounded position-absolute top-0 start-50 translate-middle">
                        <i className={`${icon} text-white fs-3`}></i>
                    </div>
                    <h1 className='fs-4 fw-bold'>{heading}</h1>
                    <p className='fs-6'>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Item
