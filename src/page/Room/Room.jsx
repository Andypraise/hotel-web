import React from 'react'
import "./Room.css"
import SliderCard from '../../components/SliderCard/SliderCard'
import cardImage from "../../assets/image2.png"
import card2Image from "../../assets/image4.png"
import card3Image from "../../assets/image6.png"
function Room() {
  return (
    <div>
      
        <div className='room-section'>
          <div className='open'><h1>Luxurious Rooms</h1>
          <h2>Hotel Rooms</h2>
</div>
            <div className='room-feature'>
                <h2>Our Rooms</h2>
                <div className='div-color'>
                    
                </div>
            </div>

            <div className='card'>
                <SliderCard url={card2Image} title="Standard Room" text="$350.00 / per night" className="room-card"/>
                <SliderCard url={cardImage} title="Family Room" text="$400.00 / per night" className="room-card"/>
                <SliderCard url={card3Image} title="Single Room" text="$255.00 / per night" className="room-card"/>
                <SliderCard url={card2Image} title="Deluxe Room" text="$150.00 / per night" className="room-card"/>
                <SliderCard url={cardImage} title="Luxury Room" text="$200.00 / per night" className="room-card"/>
                <SliderCard url={card3Image} title="Single Room" text="$150.00 / per night" className="room-card"/>
            </div>
        </div>
    </div>
  )
}

export default Room