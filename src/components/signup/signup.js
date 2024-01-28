import React from "react"
import { useState } from "react";
// import "./login.css";

import { Link } from "react-router-dom";
// import ToggleButton from "../toggle/toggle";

function Signup() {
    const [toggle, handleclick] = useState(false);
    const handleClick = () => {
        handleclick(!toggle); // Toggle the class on each click
        console.log("handleclick");
    };
    // const [flag, setFlag] = useState(true);
    return (
        <div className="signup-wrapper text-center rounded-2">
            <div className="signup bg-light-subtle rounded-4">
                <form>
                    <div className="form-wrapper p-5">
                        <div className="d-flex justify-content-center p-0 c rounded-4 mt-5 mb-3 border">
                            <Link id="log" className="col text-black rounded-end-4 p-3" to="/">Login</Link>
                            <Link id="sign" onClick={handleClick} className="col text-light background rounded-4 p-3" to="/signup">Signup</Link>
                        </div>
                        <input type="email" autoFocus className="border rounded-4 p-3 my-2" placeholder="E-mail Address" required></input>
                        <input type="password" className="border rounded-4 p-3 my-2" placeholder="Password" required></input>
                        <input type="password" className="border rounded-4 p-3 my-2" placeholder="Confirm Password" required></input>
                        <button className="btn background text-light p-3 my-3 rounded-4">Signup</button>
                        <p className="p-2 mb-4">Already a member? <Link to="/">Login Here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;