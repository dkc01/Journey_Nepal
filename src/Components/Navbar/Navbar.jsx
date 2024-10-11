// again rafce to create componnent 
import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import journey_nepal from "../../assets/journey-nepal.png"

import { Link } from 'react-scroll';
import menu_icon from "../../assets/menu-icon.png"

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect( ()=> {
        window.addEventListener('scroll', ()=> {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () =>{
        mobileMenu? setMobileMenu(false) : setMobileMenu(true);
    }
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}> {/* we need space between this container*/ }
        <img src={journey_nepal} alt=""  className='logo'/>
        <ul className={mobileMenu?'':"hide-mobile-menu"}>
            {/*react scroll npm install react-scroll */}
            
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="destination" smooth={true} offset={-260} duration={500}>Destination</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500}>About Nepal</Link></li>
            <li><Link to="campus" smooth={true} offset={-260} duration={500}>Gallery</Link></li>
            <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to="contact" smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>

            {/*Either we can go to the components and provide id = whatever we have used for to, or if the components are all with different names that also works */}
            {/*For responsive we will use media query */}
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
      
    </nav>
  )
}

export default Navbar
