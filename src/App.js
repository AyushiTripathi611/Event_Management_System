import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import UserDashboard from "./components/user dashboard/userdashboard";
import AdminDashboard from "./components/admin dashboard/admindashboard";
import EventList from "./components/eventlist/eventlist";
import ForgotPassword from "./components/forgotpassword/forgotpasword"
import Home from "./components/home/home";
import CreateEvent from "./components/createevent/createevent";
// import Header from "./components/header/header";

function App() {
    return (
        <Router>
            {/* <Header/> */}
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/forgotpassword" element={<ForgotPassword />} />
                <Route exact path="/user" element={<UserDashboard />} />
                <Route exact path="/admin" element={<AdminDashboard />} />
                <Route exact path="/eventlist" element={<EventList />} />
                <Route exact path="/createevent" element={<CreateEvent />} />
                <Route exact path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;