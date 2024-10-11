import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"


const Hero = () => {
  return (
    <div className='hero container'>

        <div className="hero-text">
            <h1>Creating Unforgettable Adventures</h1>
            <p>Explore the beauty of Nepal! From the majestic Himalayas to ancient temples and vibrant culture, embark on a
               journey that will inspire and captivate. Let us guide you through Nepal’s hidden gems and unforgettable adventures!</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt=""/> </button>
        </div>
      
    </div>
  )
}

export default Hero
