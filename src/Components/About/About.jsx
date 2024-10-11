import React from 'react'
import "./About.css"
import about_image from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_image} alt=""  className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{
          {setPlayState(true)}}}/>
      </div>
      <div className="about-right">
      <h3>ABOUT NEPAL</h3>
<h2>Discover the Land of Natural Wonders and Cultural Heritage</h2>
<p>
    Embark on a journey to Nepal, a country renowned for its majestic Himalayas, vibrant culture, and warm hospitality. From the world's highest peaks to serene landscapes and ancient temples, Nepal offers a rich tapestry of experiences that leave a lasting impact on travelers.
</p>
<p>
    Nepal's diverse geography, ranging from the towering Mount Everest to lush forests and tranquil lakes, invites adventure seekers and nature lovers alike. Whether you're trekking through rugged mountain trails, exploring sacred sites, or experiencing local traditions, each step brings you closer to the heart of Nepal’s unique identity.
</p>
<p>
    Whether you're a trekker, cultural enthusiast, or seeking spiritual peace, Nepal offers a diverse array of experiences that will captivate your senses and leave you with unforgettable memories. Explore the wonders of this land and immerse yourself in a journey of discovery and inspiration.
</p>

      </div>
    </div>
  )
}

export default About
