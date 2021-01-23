import React from 'react'
import Banner from '../../components/banner/Banner'
import Carousel from '../../components/carousel/Carousel'

const Home = () => {
    return (
        <div>
           <Banner>
                <h1>Welcome, Ishita</h1>
                <p>It's great to see you back at your safe space</p>
           </Banner>
           <Carousel label='Yay! Someone recomended you a book' className='carousel-width-50'/>
           <Carousel label='Calming Therapies' className='carousel-width-100'/>
           <Carousel label='Music To Soothe' className='carousel-width-100'/>
        </div>
    )
}

export default Home
