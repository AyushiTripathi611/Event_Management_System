// EventSearchBar.js
import React, { useState } from "react";

const EventSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    // Call the onSearch prop with the current search term
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search events..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default EventSearchBar;
