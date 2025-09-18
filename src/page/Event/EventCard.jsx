import React from "react";
import SliderCard from "../../components/SliderCard/SliderCard";
import card2Image from "../../assets/image4.png";
import "./EventCard.css"
function EventCard() {
  return (
    <div>
      <div>
        <div className="open">
          <h1> Read Our</h1>
          <h2>Blogs & Events</h2>
        </div>
        <div className="color-card">
          <SliderCard
            url={card2Image}
            title="Lorem Ipsum Dolor Sit Amet"
            text="Sep 20th, 2025 • By Admin"
            color={"Lorem ipsum dolor sit amet consectetur \nadipisicing elit. Optio dolores culpa qui\n aliquam placeat nobis "}
            className="event-card"
          />
          <SliderCard
            url={card2Image}
            title="Lorem Ipsum Dolor Sit Amet"
            text="Sep 20th, 2025 • By Admin"
            color={"Lorem ipsum dolor sit amet consectetur \nadipisicing elit. Optio dolores culpa qui\n aliquam placeat nobis "}
            className="event-card"
          />
          <SliderCard
            url={card2Image}
            title="Lorem Ipsum Dolor Sit Amet"
            text="Sep 20th, 2025 • By Admin"
            color={"Lorem ipsum dolor sit amet consectetur \nadipisicing elit. Optio dolores culpa qui\n aliquam placeat nobis "}
            className="event-card"
          />
          <SliderCard
            url={card2Image}
            title="Lorem Ipsum Dolor Sit Amet"
            text="Sep 20th, 2025 • By Admin"
            color={"Lorem ipsum dolor sit amet consectetur \nadipisicing elit. Optio dolores culpa qui\n aliquam placeat nobis "}
            className="event-card"
          />
          <SliderCard
            url={card2Image}
            title="Lorem Ipsum Dolor Sit Amet"
            text="Sep 20th, 2025 • By Admin"
            color={"Lorem ipsum dolor sit amet consectetur \nadipisicing elit. Optio dolores culpa qui\n aliquam placeat nobis "}
            className="event-card"
          />
          <SliderCard
            url={card2Image}
            title="Lorem Ipsum Dolor Sit Amet"
            text="Sep 20th, 2025 • By Admin"
            color={"Lorem ipsum dolor sit amet consectetur \nadipisicing elit. Optio dolores culpa qui\n aliquam placeat nobis "}
            className="event-card"
          />
        </div>
      </div>
    </div>
  );
}

export default EventCard;
