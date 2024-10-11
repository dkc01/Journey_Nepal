import React, { useRef } from 'react'
import "./Testimonials.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"

const Testimonials = () => {
    const slider = useRef();

    let tx = 0;
    const slideForward = ()=> {
        if(tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = ()=> {
        if(tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }


  return (
    <div className='testimonials'> 
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li >
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                    <div>
                        <h3>Anna Schmidt</h3>
                        <span>Germany</span>
                    </div>
                    </div>
                <p>"Exploring Nepal was like stepping into another world. 
                    The combination of breathtaking landscapes and ancient temples created a unique and enriching
                     experience. The warmth and 
                    generosity of the people were highlights of my visit. Nepal will always have a special place in my heart."</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                    <div>
                        <h3>William Jackson</h3>
                        <span>USA</span>
                    </div>
                    </div>
                <p>"My visit to Nepal was an incredible journey of both adventure and peace. The trek to Everest Base Camp was challenging yet rewarding, and the cultural richness of Kathmandu was fascinating. The Nepalese people are some of the kindest I've ever met. I hope to return soon!"</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                    <div>
                        <h3>Sarah Mitchell</h3>
                        <span>USA</span>
                    </div>
                    </div>
                <p>"My trip to Nepal was truly magical. The serene beauty of the Himalayas, the rich culture, and the warm hospitality of the Nepali people made this journey unforgettable. Trekking in the Annapurna region was a highlight of my life. I can't wait to return!"</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                    <div>
                        <h3>James Williams</h3>
                        <span>USA</span>
                    </div>
                    </div>
                <p>"Nepal has always been on my bucket list, and it exceeded all my expectations. The vibrant streets of Kathmandu, the peaceful vibes of Pokhara, and the majestic Everest base camp trek were experiences I'll cherish forever. Highly recommend it to any adventure enthusiast!"</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
