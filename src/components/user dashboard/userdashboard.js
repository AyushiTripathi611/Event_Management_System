// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./userdashboard.css";
// // import EventList from "../eventlist/eventlist";
// import HeaderCopy from "../header/headercopy";
// import Paper from '@mui/material/Paper';

// function UserDashboard() {
//   const approvedRequests = JSON.parse(localStorage.getItem("approvedEvents"));
//   const [approvalRequests, setApprovalRequests] = useState(
//     JSON.parse(localStorage.getItem("events")) || []
//   );
//   useEffect(() => {
//     // Fetch and set approval requests when the component mounts
//     setApprovalRequests(JSON.parse(localStorage.getItem("events")) || []);
//   }, []);

//   return (
//     <>
//       <HeaderCopy />
//       <div className="container">
//         <Link to="/createevent">
//           <button className="btn btn-primary mt-3">Create Event</button>
//         </Link>
//         <div className="row mt-3">
//           <div className="row -md-6">
//             <h3>Requested Approvals</h3>
//             <div>
//               {approvalRequests.map((event, index) => (
//                 <div key={index}>
//                   <p>Title: {event.title}</p>
//                   <p>Description: {event.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="col-md-6">
//             <h3>Approved Requests</h3>
//             {approvedRequests.map((event, index) => (
//               <div key={index} className="mb-4">
//                <Paper>{"Title: " + event.title}
//                <br></br>
//                 {"Date: " + event.date}</Paper>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default UserDashboard;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./userdashboard.css";
import HeaderCopy from "../header/headercopy";
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
function UserDashboard() {
  const approvedRequests = JSON.parse(localStorage.getItem("approvedEvents"));
  const [approvalRequests, setApprovalRequests] = useState(
    JSON.parse(localStorage.getItem("events")) || []
  );
  useEffect(() => {
    // Fetch and set approval requests when the component mounts
    setApprovalRequests(JSON.parse(localStorage.getItem("events")) || []);
  }, []);

  return (
    <>
      <HeaderCopy />
      <div className="container mt-3">
        <Link to="/createevent">
          <button className="btn btn-primary">Create Event</button>
        </Link>
        <div className="row-md-6">
          <h3>Requested Status</h3>
          <div className="col-12">
            {approvalRequests.map((event, index) => (
              <div key={index} className="col mb-4">
                <Paper square elevation={3} className="pending-card">
                  {"Title: " + event.title}
                  <br></br>
                  {"Date: " + event.date}
                </Paper>
              </div>
            ))}
          </div>
          <div className="row row-md-6">
            <div className="col-6 mr-4">
              {approvedRequests.map((event, index) => (
                <div key={index} className="col mb-4">
                  <Paper elevation={3} square className="approved-card">
                    <div className="d-flex justify-content-between ">
                      {"Title: " + event.title}
                      <Chip label="Approved" color="success" variant="outlined" />
                    </div>
                    {"Date: " + event.date}
                  </Paper>
                </div>
              ))}
            </div>
            <div className="col-6 ml-4">
              {approvedRequests.map((event, index) => (
                <div key={index} className="col mb-4">
                  <Paper elevation={3} square className="rejected-card">
                    <div className="d-flex justify-content-between ">
                      {"Title: " + event.title}
                      <Chip label="Rejected" color="error" variant="outlined" />
                    </div>
                    {"Date: " + event.date}
                  </Paper>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
