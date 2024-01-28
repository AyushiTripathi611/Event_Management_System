import React from "react";

const PendingEvents = ({ events, handleApproval, handleDeny }) => (
  <div>
    <h3>Pending Events</h3>
    <div className="">
      {events.map((event, index) => (
        // Check if the event is not denied before rendering
        !event.denied && (
          <div key={index} className="event-card">
            <p>Title: {event.title}</p>
            <p>Description: {event.description}</p>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <button onClick={() => handleApproval(event)}>Approve</button>
            <button onClick={() => handleDeny(event)}>Deny</button>
          </div>
        )
      ))}
    </div>
  </div>
);

export default PendingEvents;
