import React from 'react'
import "../assets/css/Home.css"
import SliderCarousel from 'components/Slider/SliderCarousel'
import Support from 'components/Support/Support'
import Famous from 'components/FamousCardCarousel/index'

function Home() {
    return (
        <div className='home'>
        <SliderCarousel/>
        <div className="cont">
        <Support/>
        </div>
        <div className="cont">
            <Famous/>
        </div>
        </div>
    )
}

export default Home
