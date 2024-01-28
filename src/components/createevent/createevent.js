import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EventTitleStep from "../eventtitlestep/EventTitleStep";
import EventDescriptionStep from "../eventdescriptionstep/EventDescriptionStep";
import EventDateStep from "../eventdatestep/EventDateStep";
import EventTimeStep from "../eventtimestep/EventTimeStep";
import DraggableDialog from "../dialog box";
import EventImageStep from "../eventimagestep/EventImageStep";

const steps = [
  "Enter the title",
  "Enter description",
  "Enter date",
  "Enter time",
  "Attach image",
];

const CreateEvent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    image: "",
  });
  const [submissionComplete, setSubmissionComplete] = useState(false);

  const handleInputChange = (name, value) => {
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = () => {
    // Create a JSON object with the event data
    const eventDataJSON = {
      title: eventData.title,
      description: eventData.description,
      date: eventData.date,
      time: eventData.time,
      image: eventData.image,
    };

    // Load existing data from the file
    const existingData = JSON.parse(localStorage.getItem("events")) || [];

    // Add the new event data to the array
    const newData = [...existingData, eventDataJSON];

    // Save the updated data back to the file
    localStorage.setItem("events", JSON.stringify(newData));

    // Reset the component state for the next use
    setEventData({
      title: "",
      description: "",
      date: "",
      time: "",
      image: null,
    });

    // Mark submission as complete
    setSubmissionComplete(true);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <EventTitleStep handleInputChange={handleInputChange} title={eventData.title} />;
      case 1:
        return <EventDescriptionStep handleInputChange={handleInputChange} description={eventData.description} />;
      case 2:
        return <EventDateStep handleInputChange={handleInputChange} date={eventData.date} />;
      case 3:
        return <EventTimeStep handleInputChange={handleInputChange} time={eventData.time} />;
      case 4:
        return <EventImageStep handleInputChange={handleInputChange} />;
      default:
        return "Unknown step";
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '700px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <div className="container">
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <div>
            {submissionComplete ? (
              <DraggableDialog
                setSubmissionComplete={setSubmissionComplete}
                setActiveStep={setActiveStep}
                setEventData={setEventData}
              // handleFinish={handleFinish}
              />
            ) : (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>{getStepContent(activeStep)}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={activeStep === steps.length - 1 ? handleFinish : handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default CreateEvent;
