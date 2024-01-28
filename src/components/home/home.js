// Updated Home.js
import React from "react";
import "./home.css";
import EventCarousel from "../carousel/EventCarousel";
import EventList from "../eventlist/eventlist";
import HeaderCopy from "../header/headercopy";

function Home() {
  return (
    <div className="container-fluid"> {/* Use container-fluid for a full-width container */}
      <HeaderCopy />
      <div className="row">
        <div className="col">
          <EventCarousel />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <EventList />
        </div>
      </div>
    </div>
  );
}

export default Home;
