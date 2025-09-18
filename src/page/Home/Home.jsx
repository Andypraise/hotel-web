import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation"; // 👈 add this

import "./Home.css";
import mainImage from "../../assets/image1.png"; // main video thumbnail
import previewImage from "../../assets/image6.png"; // preview image
import arrowImage from "../../assets/image7.png";
import SliderCard from "../../components/SliderCard/SliderCard";
import cardImage from "../../assets/image2.png";
import card2Image from "../../assets/image4.png";
import card3Image from "../../assets/image6.png";
import swiImage from "../../assets/image23.png";
import hoteImage from "../../assets/image24.png";
import fireImage from "../../assets/image26.png";
import carImage from "../../assets/image25.png";
import hairImage from "../../assets/image27.png";
import miniImage from "../../assets/image28.png";
import drinkImage from "../../assets/image29.png";
import portImage from "../../assets/image30.png";
import PromoBanner from "../../components/PromoBanner/PromoBanner";
import Gallery from "../../components/Gallery/Gallery";
import frankImage from "../../assets/image22.png"

function Home() {
  return (
    <div>
      {/* === Home Hero Slider === */}
      <div className="home-slider" id="home">
        <Swiper
          modules={[EffectFade, Autoplay, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
        >
          <SwiperSlide>
            <div className="slide">
              <h2>Welcome to Serynna Villa</h2>
              <p>Hotel & Resort</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-2">
              <h2>Unique Experience</h2>
              <p>Enjoy With Us</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-1">
              <h2>Relaxing Room</h2>
              <p>Your Room, Your Stay</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* === Rooms Section === */}
      <div className="room-section">
        <div className="room-feature">
          <h2>Our Rooms</h2>
          <div className="div-color"></div>
        </div>

        <div className="card">
          <SliderCard
            url={card2Image}
            title="Standard Room"
            text="$350.00 / per night"
            className="room-card"
          />
          <SliderCard
            url={cardImage}
            title="Family Room"
            text="$400.00 / per night"
            className="room-card"
          />
          <SliderCard
            url={card3Image}
            title="Single Room"
            text="$255.00 / per night"
            className="room-card"
          />
          <SliderCard
            url={card2Image}
            title="Deluxe Room"
            text="$150.00 / per night"
            className="room-card"
          />
          <SliderCard
            url={cardImage}
            title="Luxury Room"
            text="$200.00 / per night"
            className="room-card"
          />
          <SliderCard
            url={card3Image}
            title="Single Room"
            text="$150.00 / per night"
            className="room-card"
          />
        </div>
      </div>

      {/* === About Section === */}
      <div className="select">
        <div className="video-container">
          <img src={mainImage} alt="Main Video" className="main-thumb" />
          <div className="play-button">&#9658;</div>
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
            <br /> ipsum possimus eos quam quae, facere non corrupti <br />
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

      {/* === Hotel Features === */}
      <div className="hotel-1">
        <h2>Hotel Features</h2>
        <div className="div-color"></div>
        <div className="hotel">
          <div className="port">
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

      {/* === Promo + Gallery === */}
      <div>
        <PromoBanner />
        <Gallery />
      </div>
      <div className="event-section">
        <h2>Upcoming Events</h2>
        <div className="div-color"></div>

        <div className="event-slider-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
             centeredSlides={true}
            breakpoints={{
              
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            className="event-swiper"
          >
            <SwiperSlide>
              <SliderCard
                url={card2Image}
                title="Lorem Ipsum Dolor Sit Amet"
                text="Sep 20th, 2025 • By Admin"
                color="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                className="event-card"
              />
            </SwiperSlide>

            <SwiperSlide>
              <SliderCard
                url={cardImage}
                title="Second Blog Post"
                text="Sep 25th, 2025 • By Admin"
                color="Quisquam aliquid magni numquam sit amet."
                className="event-card"
              />
            </SwiperSlide>

            <SwiperSlide>
              <SliderCard
                url={card3Image}
                title="Third Blog Post"
                text="Oct 1st, 2025 • By Admin"
                color="Rerum beatae placeat eos pariatur vel."
                className="event-card"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                url={card2Image}
                title="Third Blog Post"
                text="Oct 1st, 2025 • By Admin"
                color="Rerum beatae placeat eos pariatur vel."
                className="event-card"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                url={card2Image}
                title="Third Blog Post"
                text="Oct 1st, 2025 • By Admin"
                color="Rerum beatae placeat eos pariatur vel."
                className="event-card"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                url={card3Image}
                title="Third Blog Post"
                text="Oct 1st, 2025 • By Admin"
                color="Rerum beatae placeat eos pariatur vel."
                className="event-card"
              />
            </SwiperSlide>
          </Swiper>

          {/* Custom Arrow Buttons */}
          <div className="custom-prev">❮</div>
          <div className="custom-next">❯</div>
        </div>
      </div>

      {/* === Client / Testimonials Section === */}
      <div className="client-section">
        <div className="room-feature">
          <h2>What People Say</h2>
          <div className="div-color"></div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
        >
          <SwiperSlide>
            <div className="client">
              <img src={card3Image} alt="" />
              <div>
                <h2>Andy Chibueze</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Laudantium recusandae atque soluta explicabo ad iste nam{" "}
                  <br />
                  ullam molestias sint, cum in magnam veniam, <br />
                  asperiores quod! Hic libero tempore ea dicta!
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="client">
              <img src={frankImage} alt="" />
              <div>
                <h2>Andy Chibueze</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Laudantium recusandae atque soluta explicabo ad iste nam{" "}
                  <br />
                  ullam molestias sint, cum in magnam veniam, <br />
                  asperiores quod! Hic libero tempore ea dicta!
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="client">
              <img src={frankImage} alt="" />
              <div>
                <h2>Andy Chibueze</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Laudantium recusandae atque soluta explicabo ad iste nam{" "}
                  <br />
                  ullam molestias sint, cum in magnam veniam, <br />
                  asperiores quod! Hic libero tempore ea dicta!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client">
              <img src={frankImage} alt="" />
              <div>
                <h2>Andy Chibueze</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Laudantium recusandae atque soluta explicabo ad iste nam{" "}
                  <br />
                  ullam molestias sint, cum in magnam veniam, <br />
                  asperiores quod! Hic libero tempore ea dicta!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client">
              <img src={card3Image} alt="" />
              <div>
                <h2>Andy Chibueze</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Laudantium recusandae atque soluta explicabo ad iste nam{" "}
                  <br />
                  ullam molestias sint, cum in magnam veniam, <br />
                  asperiores quod! Hic libero tempore ea dicta!
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
