import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usersData from "../../data/roles.json";
import "./login.css"; // Import your CSS file

function Login() {
    const [toggle, handleclick] = useState(false);
    const handleClick = () => {
        handleclick(!toggle); // Toggle the class on each click
        console.log("handleclick");
    };

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const user = usersData[email];

        if (user && user.password === password) {
            localStorage.setItem('userRole', user.role);
            if (user.role === "admin") {
                // Redirect to the admin dashboard if the user is an admin
                navigate("/home");
            } else {
                // Redirect to the event form page for regular users
                navigate("/home");
            }
        } else {
            alert("Invalid email address or password.");
        }
    }

    return (<div className="background-color">
        <div className="login-wrapper text-center rounded-2">
            <div className={`login bg-light-subtle rounded-4`}>
                <form onSubmit={handleLogin}>
                    <div className="form-wrapper p-5">
                        <div className="d-flex justify-content-center p-0 c rounded-4 mt-5 mb-3 border">
                            <Link id="log" className="col text-white background rounded-4 p-3" to="/">Login</Link>
                            <Link id="sign" onClick={handleClick} className="col text-black rounded-end-4 p-3" to="/signup">Signup</Link>
                        </div>

                        <input
                            type="email"
                            autoFocus
                            className={`border rounded-4 p-3 my-2`}
                            placeholder="E-mail Address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className={`border rounded-4 p-3 my-2`}
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Link to="/forgotpassword">Forgot Password</Link>
                        <button
                            className={`btn background text-white p-3 my-3 rounded-4`}
                            type="submit"
                        >
                            Login
                        </button>
                        <p className={`p-2 mb-4`}>
                            Not a member? <Link to="/signup">Signup Here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}

export default Login;