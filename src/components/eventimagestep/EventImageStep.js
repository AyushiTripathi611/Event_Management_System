// EventImageStep.js
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const EventImageStep = ({ handleInputChange }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        handleInputChange("image", reader.result); // Pass image data to the parent component
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box>
      <TextField
        type="file"
        onChange={handleImageChange}
        // label="Upload Image"
        inputProps={{ accept: "image/*" }}
      />
      {selectedImage && (
        <Box mt={2}>
          <img src={selectedImage} alt="Selected" style={{ maxWidth: "100%", maxHeight: "200px" }} />
        </Box>
      )}
    </Box>
  );
};

export default EventImageStep;
