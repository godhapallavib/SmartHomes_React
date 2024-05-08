import React from 'react'
import './Hero.css'
import smarthome_img from '../Assets/site/smart-home-image.jpeg'

const Hero = () => {
  return (
    <div className='hero'>
       <div className="hero-left">
       <img src={smarthome_img} alt=""/>
     <p> <h2>The world trusts us in making their homes SMART</h2></p>
     <p><h1>We beat our competitors in all aspects. Price-Match Guaranteed</h1></p>
     </div>
       </div>
  )
}

export default Hero