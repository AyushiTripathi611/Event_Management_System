import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
import './App.css';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Home from './components/home/home';
import ForgotPassword from './components/forgotpassword/forgotpasword';

function App(props) {
  return (
    
    <Router>
    {/* <ToggleButton/> */}
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/signup" element={<Signup/>} />
      <Route exact path="/forgotpassword" element={<ForgotPassword/>} />
      <Route exact path="/home" element={<Home/>} />


    </Routes>
  </Router>

  );
}

export default App;



// <Router>
//       <Toggle/>
//   <Routes>
//     <Route  />
//     {/* <Route path="/about" component={About} />
//     <Route path="/contact" component={Contact} /> */}
//   </Routes>
// </Router>