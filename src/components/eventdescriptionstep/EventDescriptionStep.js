import React from "react";

const EventDescriptionStep = ({ handleInputChange, description }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleInputChange(name, value);
  };

  return (
    <div>
      <h2>Step 2: Event Description</h2>
      <textarea
        name="description"
        placeholder="Event Description"
        value={description}
        onChange={handleChange}
      />
    </div>
  );
};

export default EventDescriptionStep;
