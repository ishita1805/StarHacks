import React from 'react'
import './landing.css'
import Login from '../../components/Login/Login'
import VidCard from '../../components/vidCard/VidCard'
import Footer from '../../components/footer/Footer'
import vid1 from '../../assets/vid1.mp4'
import vid2 from '../../assets/vid2.mp4'
import logo from '../../assets/logo_full.png'

const Landing = () => {
    return (
        <div className='container'>
        <div className='landing'>
            <VidCard video={vid1}>
                <Login/>
            </VidCard>
            <VidCard video={vid2} className='hide-vid-card'>
                <div className='vid-card-2'>
                    <h1 className='white'>Safe Space</h1>
                    <h3 className='white'>Be Kind To Your Mind</h3>
                    <p className='white-p-landing'>An Open Source Initiative By Ishita</p>
                </div>
            </VidCard>
            <div className='landing-inner'>
                <h1>Give Your Mind<br/> A <span className='red'>Breather</span></h1>
                <br/>
                <p>
                    Safe space is place for the mind to release and reduce the stress of a busy life.<br/><br/> 
                    Find therapies, affirmations and myth busters<br/><br/>
                    Take your daily mind scan to get customized music, book, and lifestyle recommendations <br/><br/>
                </p>
                <img src={logo} alt='logo big'/>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Landing
