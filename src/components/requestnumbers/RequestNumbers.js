// RequestNumbers.js
import React from "react";
import Paper from '@mui/material/Paper';

const RequestNumbers = ({ pending, approved, denied }) => (
      <Paper className="d-flex">
        <div className="px-3 py-3 pt-3 pb-3 text-center">
          Pending requests <br /> <span>({pending})</span>
        </div>
        <div className="px-3 py-3 pt-3 pb-3 text-center">
          Approved requests <br /> <span>({approved})</span>
        </div>
        <div className="px-3 py-3 pt-3 pb-3 text-center">
          Rejected requests <br /> <span>({denied})</span>
        </div>
      </Paper>
);

export default RequestNumbers;
