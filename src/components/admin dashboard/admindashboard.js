import React, { useState } from "react";
import "./admindashboard.css";
import DoughnutChart from "../chartcomponent";
import RequestNumbers from "../requestnumbers/RequestNumbers";
import ActionButton from "../actionbutton/ActionButton";
import EventSearchBar from "../eventsearchbar/EventSearchBar";
import HeaderCopy from "../header/headercopy";
import { SortByAlpha } from "@mui/icons-material";
import EventIcon from '@mui/icons-material/Event';
import Pending from "../pendingevents/pending";


function AdminDashboard() {

  const [pendingEvents, setPendingEvents] = useState(
    JSON.parse(localStorage.getItem("events")) || []
  );
  const [approvedEvents, setApprovedEvents] = useState(
    JSON.parse(localStorage.getItem("approvedEvents")) || []
  );
  const [deniedEvents, setDeniedEvents] = useState(
    JSON.parse(localStorage.getItem("deniedEvents")) || []
  );

  const chartData = [
    { id: 0, value: pendingEvents.length, label: 'Pending requests' },
    { id: 1, value: approvedEvents.length, label: 'Approved requests' },
    { id: 2, value: deniedEvents.length, label: 'Denied requests' },
  ];


  const handleApproval = (eventData) => {
    const updatedPendingEvents = pendingEvents.filter(
      (event) => event !== eventData
    );

    setPendingEvents(updatedPendingEvents);
    localStorage.setItem("events", JSON.stringify(updatedPendingEvents));

    eventData.approved = true;

    const updatedApprovedEvents = [...approvedEvents, eventData];
    setApprovedEvents(updatedApprovedEvents);
    localStorage.setItem(
      "approvedEvents",
      JSON.stringify(updatedApprovedEvents)
    );
  };


  const handleDeny = (eventData) => {
    const updatedPendingEvents = pendingEvents.filter(
      (event) => event !== eventData
    );

    setPendingEvents(updatedPendingEvents);
    localStorage.setItem("events", JSON.stringify(updatedPendingEvents));

    eventData.denied = true;

    const updatedDeniedEvents = [...deniedEvents, eventData];
    setDeniedEvents(updatedDeniedEvents);
    localStorage.setItem("deniedEvents", JSON.stringify(updatedDeniedEvents));
  };


  const [sortType, setSortType] = useState("");
  const sortPendingEvents = (type) => {
    let sortedEvents = [...pendingEvents];

    if (type === "date") {
      sortedEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (type === "name") {
      sortedEvents.sort((a, b) => a.title.localeCompare(b.title));
    }

    return sortedEvents;
  };


  const handleSort = (type) => {
    setSortType(type);
    setPendingEvents(sortPendingEvents(type));
  };

  const [searchTerm, setSearchTerm] = useState(""); // State to store search term
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Filter events based on the search term
  const filteredPendingEvents = pendingEvents.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <HeaderCopy />

      <div className="container">
        <div className="row d-flex justify-content-center">
         <div className="col-4">
         <DoughnutChart data={chartData} />
         </div>
         <div className="col-4">
           <RequestNumbers 
            pending={pendingEvents.length}
            approved={approvedEvents.length}
            denied={deniedEvents.length}
          />
         </div>
         
        </div>

        <br></br>
        <EventSearchBar onSearch={handleSearch} />

        <div className="action-buttons">
          <ActionButton
            icon={<SortByAlpha />}
            onClick={() => handleSort("name")}
            active={sortType === "name"}
            className="btn btn-primary"
          />
          <ActionButton
            icon={<EventIcon />}
            onClick={() => handleSort("date")}
            active={sortType === "date"}
            className="btn btn-primary"
          />

        </div>

        <Pending events={filteredPendingEvents} handleApproval={handleApproval}
            handleDeny={handleDeny}></Pending>
      </div>
    </>

  );
}

export default AdminDashboard;