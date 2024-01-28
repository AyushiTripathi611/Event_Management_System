import React from "react";

const EventTimeStep = ({ handleInputChange, time }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleInputChange(name, value);
  };

  return (
    <div>
      <h2>Step 4: Event Time</h2>
      <input
        type="time"
        name="time"
        placeholder="Event Time"
        value={time}
        onChange={handleChange}
        className="title-input"
      />
    </div>
  );
};

export default EventTimeStep;
