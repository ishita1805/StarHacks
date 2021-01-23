import React from 'react'
import './carousel.css'

const Carousel = (props) => {
    return (
        <div className={`carousel-container ${props.className}`}>
        <p>{props.label}</p>
        <div className='carousel'>
            {props.children}
        </div>
        </div>
    )
}

export default Carousel
