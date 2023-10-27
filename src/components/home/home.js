import React from "react";
import { useLocation } from "react-router-dom";
import './home.css'
function Home() {
  const location = useLocation();
  const role = location.state && location.state.role;

  return (
    <div className="container-body">
      <div className="container">
        <section>
          <div className="background p-5">
            {role === "admin" ? (
              <p className="fs-1 text-white text-center">Hello, admin</p>
            ) : (
              <p className="fs-1 text-white text-center">Hello, member</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
