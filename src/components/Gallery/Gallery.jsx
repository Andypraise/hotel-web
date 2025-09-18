import React from "react";
import "./Gallery.css";

// import your images
import img1 from "../../assets/image4.png";
import img2 from "../../assets/image4.png";
import img3 from "../../assets/image4.png";
import img4 from "../../assets/image4.png";
import img5 from "../../assets/image4.png";
import img6 from "../../assets/image6.png";
import img7 from "../../assets/image6.png";
import img8 from "../../assets/image6.png";

function Gallery() {
  return (
    <div className="gallery-section">
      <div className="gallery-feature">
        <h2>Our Gallery</h2>
        <div className="div-color"></div>
      </div>

      <div className="gallery-grid">
        <img src={img1} alt="gallery" />
        <img src={img2} alt="gallery" />
        <img src={img3} alt="gallery" />
        <img src={img4} alt="gallery" />
        <img src={img5} alt="gallery" />
        <img src={img6} alt="gallery" />
        <img src={img7} alt="gallery" />
        <img src={img8} alt="gallery" />
      </div>
    </div>
  );
}

export default Gallery;
