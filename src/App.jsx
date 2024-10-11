// rafce shortcut for react component
// for that install es7 react extension 


import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Destination from './Components/Destination/Destination'
import Title from "./Components/Title/Title"
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'


const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      {/*we used div container class to add more space in left and right of the program images */}
      <div className="container">
        <Title subTitle="Popular Destinations" title="Adventures not to miss"/>
        <Destination/>
        <About setPlayState={setPlayState}/>
        <Title subTitle="Gallery" title="Some beautiful places"/>
        <Gallery/>
        <Title subTitle="TESTIMONIALS" title="Hear from the visitors"/>
        <Testimonials/>
        <Title subTitle="Contact Us" title="Get in Touch"/>
        <Contact/>
        <Footer/>
        {/*for scroll we have used react-scroll */}
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      </div>
    </div>
  )
}

export default App
