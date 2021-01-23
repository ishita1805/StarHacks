import React from 'react'
import './banner.css'
const Banner = (props) => {
    return (
        <div className={`banner ${props.className}`}>
            <div className={`banner-inner ${props.className}`}>
                {props.children}
                {/* <h1>Welcome, Ishita</h1>
                <p>It's great to see you back at your safe space</p> */}
            </div>
        </div>
    )
}

export default Banner
