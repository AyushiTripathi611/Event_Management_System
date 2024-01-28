import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';


export default function DraggableDialog({setActiveStep, setSubmissionComplete, setEventData }) {
  const [open, setOpen] = React.useState(false);

  // const setSubmissionComplete = (value) => {
  //   console.log('Submission complete:', value);
  //   setOpen(true);
  // };

  // // Simulate the completion of the submission process
  // React.useEffect(() => {
  //   // Call setSubmissionComplete with the desired value
  //   setSubmissionComplete(true);
  // }); // The empty dependency array ensures this effect runs once on component mount

  React.useEffect(() => {
    if (setSubmissionComplete) {
      setOpen(true);
    }
  }, [setSubmissionComplete]);

  const handleClose = () => {
    setActiveStep(0);
    setOpen(false); 
    setSubmissionComplete(false);
    setEventData({
      title: "",
      description: "",
      date: "",
      time: "",
    });
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        // onClose={handleClose}
        // PaperComponent={PaperComponent}
        // aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move', color: 'green'}}>
        Success
        </DialogTitle>
        <DialogContent>
            Thanks for your submission!
        </DialogContent>
        <DialogActions>
            <Link to="/user">
              <Button onClick={() => console.log("Go to user dashboard")}>Go to User Dashboard</Button>
            </Link>
            <Link to="/createevent">
            <Button onClick={handleClose}>Create Another Event</Button>
            </Link>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
