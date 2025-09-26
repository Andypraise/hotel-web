import React from 'react'
import "./Footer.css"
import faceImage from "../../assets/icons8-facebook-50.png"
import twiImage from "../../assets/icons8-twitter-50.png"
import instaImage from "../../assets/icons8-instagram-50.png"
function Footer() {
  return (
    <div>
        <div className='footer-link'>
            <div>
                <h4>About</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
                 Quaerat ea eum magni quasi neque h</p>
                 <div className='btn'><button>Read More</button></div>
                 
            </div>
            <div>
                <h4>Quick Menu</h4>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Approach</a></li>
                    <li><a href="">Sustainability</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Career</a></li>
                </ul>
            </div>
            <div>
                <h4>Ministries</h4>
               <ul>
                <li><a href="">Children</a></li>
                <li><a href="">Women</a></li>
                <li><a href="">Bible Study</a></li>
                <li><a href="">Church</a></li>
                <li><a href="">Missionaries</a></li>
               </ul>
            </div>
            <div>
                <h4>Social Icons</h4>
                <div className='icon-img'>
                    <img src={faceImage} alt="" width="30px" />
                    <img src={twiImage} alt="" width="30px" />
                    <img src={instaImage} alt="" width="30px" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer