import React, { useEffect, useState } from "react";
import "./PromoBanner.css";
import promoImage from "../../assets/image1.png"; // use your background image

function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-01T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft(null);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="promo-banner"
      style={{ backgroundImage: `url(${promoImage})` }}
    >
      <div className="promo-text">
        <h2>Summer Promo 50% Off</h2>
        <button>AVAIL NOW</button>
      </div>

      <div className="countdown">
        <p>The promo will start in</p>
        {timeLeft ? (
          <div className="timer">
            {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
            {timeLeft.seconds}s
          </div>
        ) : (
          <div className="timer">Promo Started!</div>
        )}
      </div>
    </div>
  );
}

export default PromoBanner;
