import React from "react";
import IconButton from '@mui/material/IconButton';

const ActionButton = ({ icon, onClick }) => (
  <IconButton onClick={onClick}>{icon}</IconButton>
);

export default ActionButton;