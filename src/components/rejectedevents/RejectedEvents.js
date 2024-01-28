import React from "react";

const RejectedEvents = ({ events, handleDeleteAll, handleDelete }) => (
  <div>
    <h3>Rejected Events</h3>
    <button onClick={handleDeleteAll}>Delete All</button>
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

export default RejectedEvents;
