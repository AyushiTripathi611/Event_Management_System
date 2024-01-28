import React from "react";

const EventDateStep = ({ handleInputChange, date }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleInputChange(name, value);
  };

  return (
    <div>
      <h2>Step 3: Event Date</h2>
      <input
        type="date"
        name="date"
        placeholder="Event Date"
        value={date}
        onChange={handleChange}
        className="title-input"
      />
    </div>
  );
};

export default EventDateStep;
