import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Layout.css"; // Import your CSS file for styling
import { useAuth } from "./Customer/AuthContext";

const Layout = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  // Function to handle logout
  const handleLogout = () => {
    navigate("/login");
    setIsLoggedIn(false);
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="logo">
          Book Store
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/search" className="nav-link">
              Search
            </Link>
          </li>
          {/* Conditional rendering based on user authentication */}
          {isLoggedIn ? (
            <li>
              <Link to="/orders" className="nav-link">
                Orders
              </Link>
            </li>
          ) : (
            <li>
              <button onClick={() => alert("Please login to view orders")} className="nav-link">
                Orders
              </button>
            </li>
          )}
          {/* End of conditional rendering */}
          {isLoggedIn ? (
            <li>
              <button onClick={handleLogout} className="logout-button">logout</button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="login-button">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <main>
        <Outlet setIsLoggedIn={setIsLoggedIn}/>
      </main>
    </div>
  );
};

export default Layout;
