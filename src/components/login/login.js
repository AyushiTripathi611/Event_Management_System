// import "./login.css";
// import { Link } from "react-router-dom";

// function Login(props) {
    
//         return (
//             <div className="login-wrapper text-center rounded-2">
//         <div className={`login bg-light-subtle rounded-4`}> 
//         <form action="/home">
//         <div className={`form-wrapper p-5`}>
//             <div className={`d-flex justify-content-center p-0 rounded-4 mt-5 mb-3 border`}>
//             <Link id="log" className={`login-btn background col text-light rounded-4 p-3`}> Login</Link>
//             <Link id="sign" className="col text-black rounded-end-4 p-3" to="/signup">Signup</Link>
//             </div>
//             <input type="email" autoFocus className={`border rounded-4 p-3 my-2`} placeholder="E-mail Address" required></input>
//             <input type="password"  className={`border rounded-4 p-3 my-2`} placeholder="Password" required></input>
//             <Link className={`p-3`} to="/forgotpassword">Forgot Password</Link>
//             <button className={`btn background text-light p-3 my-3 rounded-4`}>Login</button>
//             <p className={`p-2 mb-4`}>Not a member? <Link to="/signup">Signup Here</Link></p> 
//             </div>
//         </form>
//         </div>
//     </div>
//     );
// }

// export default Login;



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import usersData from "../../data/roles.json";

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const user = usersData[email];

//     if (user && user.password === password) {
//       navigate("/home", { state: { role: user.role } });
//     } else {
//       alert("Invalid email address or password.");
//     }
//   }

//   return (
//     <div className="login-wrapper text-center rounded-2">
//       <div className={`login bg-light-subtle rounded-4`}>
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             autoFocus
//             className={`border rounded-4 p-3 my-2`}
//             placeholder="E-mail Address"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             className={`border rounded-4 p-3 my-2`}
//             placeholder="Password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             className={`btn background text-light p-3 my-3 rounded-4`}
//             type="submit"
//           >
//             Login
//           </button>
//           <p className={`p-2 mb-4`}>
//             Not a member? <Link to="/signup">Signup Here</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usersData from "../../data/roles.json";
import "./login.css"; // Import your CSS file

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = usersData[email];

    if (user && user.password === password) {
      navigate("/home", { state: { role: user.role } });
    } else {
      alert("Invalid email address or password.");
    }
  }

  return (
    <div className="login-wrapper text-center rounded-2">
      <div className={`login bg-light-subtle rounded-4`}>
        <form onSubmit={handleLogin}>
          <div className={`form-wrapper p-5`}>
            <div className={`d-flex justify-content-center p-0 rounded-4 mt-5 mb-3 border`}>
              <Link id="log" className={`login-btn background col text-light rounded-4 p-3`}> Login</Link>
              <Link id="sign" className="col text-black rounded-end-4 p-3" to="/signup">Signup</Link>
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
            <Link className={`p-3`} to="/forgotpassword">Forgot Password</Link>
            <button
              className={`background text-light p-3 my-3 rounded-4`}
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
  );
}

export default Login;
