import React from "react";
import mainImage from "../../assets/image1.png"; // main video thumbnail
import previewImage from "../../assets/image6.png"; // preview image
import arrowImage from "../../assets/image7.png";
import "./About.css";
import swiImage from "../../assets/image12.png";
import hoteImage from "../../assets/image19.png";
import fireImage from "../../assets/image13.png";
import carImage from "../../assets/image14.png";
import hairImage from "../../assets/image15.png";
import miniImage from "../../assets/image16.png";
import drinkImage from "../../assets/image17.png";
import portImage from "../../assets/image18.png";
import PromoBanner from "../../components/PromoBanner/PromoBanner";
import Gallery from "../../components/Gallery/Gallery";
import SliderCard from "../../components/SliderCard/SliderCard";
import meganImage from "../../assets/image20.png";
import marinaImage from "../../assets/image21.png";
import ethanImage from "../../assets/image22.png";
function About() {
  return (
    <div>
      <div className="about-section">
        <div className="open">
          <h1>Suites Hotel & Resort</h1>
          <h2>About Us</h2>
        </div>
        <div className="select">
          <div className="video-container">
            {/* Main Thumbnail */}
            <img src={mainImage} alt="Main Video" className="main-thumb" />

            {/* Play Button */}
            <div className="play-button">
              <a
                href="https://www.pinterest.com/pin/1688918605308513/"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#9658;
              </a>
            </div>

            {/* Small Preview Image */}
            <img src={previewImage} alt="Preview" className="preview-thumb" />
          </div>
          <div className="about-feature">
            <div>
              <h2>About Us</h2>
              <div className="div-color"></div>
            </div>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              <br /> Quasi tempore itaque eligendi dolor odio ex ad,
              <br /> ipsum possimus eos quam quae, facere non corrupti <br />{" "}
              delectus rem, recusandae nemo veritatis similique?
            </p>
            <a
              href="https://www.pinterest.com/pin/1688918605308513/"
              target="_blank"
              rel="noopener noreferrer"
              className="watch-link"
            >
              <span className="sup">
                WATCH VIDEO <img src={arrowImage} alt="arrow" width="20" />
              </span>
            </a>
          </div>
        </div>
        <div></div>
      </div>

      <div className="staff">
        <div>
          <h2>Hotel Staff</h2>
          <div className="div-color"></div>
          </div>
          <div className="link">
            <SliderCard
              url={meganImage}
              title="Megan Pearson"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis."
              linkText="Read More"
              linkUrl="#"
              className="room-card-2"
            />
            <SliderCard
              url={marinaImage}
              title="Marina Stalks"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis."
              linkText="Read More"
              linkUrl="#"
              className="room-card-2"
            />
            <SliderCard
              url={ethanImage}
              title="Ethan Hoover"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis."
              linkText="Read More"
              linkUrl="#"
              className="room-card-2"
            />
            <SliderCard
              url={meganImage}
              title="Megan Pearson"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis."
              linkText="Read More"
              linkUrl="#"
              className="room-card-2"
            />
            <SliderCard
              url={marinaImage}
              title="Marina Stalks"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis."
              linkText="Read More"
              linkUrl="#"
              className="room-card-2"
            />
            <SliderCard
              url={ethanImage}
              title="Ethan Hoover"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis."
              linkText="Read More"
              linkUrl="#"
              className="room-card-2"
            />
          </div>
        
      </div>

      <div className="promo">
        <PromoBanner />
      </div>

      <div className="hotel-1">
        <h2>Hotel Features</h2>
        <div className="div-color"></div>
        <div className="hotel">
          <div className="port">
            {" "}
            <div>
              <img src={swiImage} alt="" />
              <p>Swimming Pool</p>
            </div>
            <div>
              <img src={hoteImage} alt="" />
              <p>Hotel Teller</p>
            </div>
            <div>
              <img src={carImage} alt="" />
              <p>Fire Exit</p>
            </div>
            <div>
              <img src={fireImage} alt="" />
              <p>Car Parking</p>
            </div>
          </div>
          <div className="port">
            {" "}
            <div>
              <img src={hairImage} alt="" />
              <p>Hair Dryer</p>
            </div>
            <div>
              <img src={miniImage} alt="" />
              <p>Minibar</p>
            </div>
            <div>
              <img src={drinkImage} alt="" />
              <p>Drinks</p>
            </div>
            <div>
              <img src={portImage} alt="" />
              <p>Car Airport</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Gallery />
      </div>
    </div>
  );
}

export default About;
