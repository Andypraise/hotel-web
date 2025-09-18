import React from "react";
import "./SliderCard.css";
function SliderCard({ url, title, text, color, className, linkText, linkUrl }) {
  return (
    <div>
      <div className={`slide-card ${className}`}>
        <img src={url} alt="" />
        <h4>{title}</h4>
        <p>{text}</p>
        <p className="card-desc">{color}</p>
        
      {/* Read More link */}
      {linkText && linkUrl && (
        <a href={linkUrl} className="card-link">
          {linkText}
        </a>
      )}
      </div>
    </div>
  );
}

export default SliderCard;
