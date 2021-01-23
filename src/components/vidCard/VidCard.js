import React from 'react'
import './vidCard.css'

const VidCard = (props) => {
    return (
        <div className={`video-card ${props.className}`}>
            <video loop autoPlay muted>
                <source src={props.video} type="video/mp4"/>
            </video>
            <div className='vid-card-content'>
               {props.children}
            </div>
        </div>
    )
}

export default VidCard
