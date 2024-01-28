// ApprovedEvents.js
import React from "react";

const ApprovedEvents = ({ events, handleDelete }) => (
  <div>
    <h3>Approved Events</h3>
    <div className="flex flex-wrap">
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <p>Title: {event.title}</p>
          <p>Description: {event.description}</p>
          <button onClick={() => handleDelete(event)}>Delete</button>
        </div>
      ))}
    </div>
  </div>
);

export default ApprovedEvents;
