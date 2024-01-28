import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventCarousel.css"

const EventCarousel = () => {
  const approvedEvents = JSON.parse(localStorage.getItem("approvedEvents")) || [];

  // Sorting and filtering logic for the carousel
  const sortedEvents = approvedEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
  const futureEvents = sortedEvents.filter((event) => new Date(event.date) >= new Date());
  const latestEvents = futureEvents.slice(0, 3);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {latestEvents.map((event, index) => (
        <div key={index} className="carousel-slide">
          <div
            className="carousel-image"
            style={{ backgroundImage: `url(${event.image || "/default-image.jpg"})` }}
          >
            <div className="glass-overlay">
              <h1 className="event-title">{event.title}</h1>
              <p className="event-date">{event.date}</p>
            </div>
          </div>
          {/* Render other event details here */}
        </div>
      ))}
    </Slider>
  );
};

export default EventCarousel;
