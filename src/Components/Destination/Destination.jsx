import React from 'react'
import './Destination.css'
import destination_1 from '../../assets/destination-1.png'
import destination_2 from '../../assets/destination-2.jpg'
import destination_3 from '../../assets/destination-3.jpg'

import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Destination = () => {
  return (
    <div className='destinations'>
      <div className="destination">
        <img src={destination_1} alt="" />
        <div className="caption">
            <h3>Everest Base Camp treak</h3>
        </div>
      </div>
      <div className="destination">
        <img src={destination_2} alt="" />
        <div className="caption">
            <h3>Pokhara</h3>
        </div>
      </div>
      <div className="destination">
        <img src={destination_3} alt="" />
        <div className="caption">
            <h3>Swyambhunath Stupa </h3>
        </div>
      </div>
    </div>
  )
}

export default Destination
