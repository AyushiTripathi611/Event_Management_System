import React from "react";
import "./EventTitleStep.css"; // Import your CSS file for styling

const EventTitleStep = ({ handleInputChange, title }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleInputChange(name, value);
  };

  return (
    <div className="event-title-step">
      <h2>Step 1: Event Title</h2>
      <input
        type="text"
        name="title"
        placeholder="Event Title"
        value={title}
        onChange={handleChange}
        className="title-input" // Apply additional styling class
      />
    </div>
  );
};

export default EventTitleStep;
