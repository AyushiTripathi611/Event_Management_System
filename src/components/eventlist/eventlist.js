import React, { useState } from "react";
import "./eventlist.css";
import MediaCard from "../EventTiles";
import EventListView from "../Eventlistview";
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import WindowIcon from '@mui/icons-material/Window';

function EventList() {
  const approvedEvents = JSON.parse(localStorage.getItem("approvedEvents")) || [];
  const [view, setView] = useState("grid");

  const toggleView = (newView) => {
    setView(newView);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mb-2">
          <div className="btn-group">
            <button
              className={`btn ${view === "grid" ? "btn-primary" : "btn-secondary"}`}
              onClick={() => toggleView("grid")}
            >
              <WindowIcon/>
            </button>
            <button
              className={`btn ${view === "list" ? "btn-primary" : "btn-secondary"}`}
              onClick={() => toggleView("list")}
            >
              <ViewHeadlineIcon/>
            </button>
          </div>
        </div>
      </div>

      {view === "grid" ? (
        <div className="row row-cols-1 row-cols-md-4">
          {approvedEvents.map((event, index) => (
            <div key={index} className="col mb-4">
              <MediaCard event={event} />
            </div>
          ))}
        </div>
      ) : (
        <EventListView events={approvedEvents} />
      )}
    </div>
  );
}

export default EventList;
