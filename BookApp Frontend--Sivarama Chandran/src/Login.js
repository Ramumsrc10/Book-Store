import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import custom CSS file for styling
import { useAuth } from './Customer/AuthContext';
import { AuthProvider } from './Customer/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const { setIsLoggedIn } = useAuth(); 

  const loginHandler = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    console.log(credentials);
    // Send login request to backend
    axios.post("http://localhost:5127/api/User/Validate", credentials)
      .then((res) => {
        console.log(res.data) // Handle login success
        if (res.data.token != null && res.data.role === "user") {
          // Set user details in local storage
          localStorage.setItem('user', JSON.stringify(res.data));
          // Set user as logged in
          setIsLoggedIn(true);
          navigate("/");
        }
        else if(res.data.token != null && res.data.role === "admin"){
          setIsLoggedIn(true);
          navigate("/admin");
        }
        else {
          console.log("Invalid credentials");
        }
      })
      .catch((err) => console.log(err)); // Handle login error
  };

  return (
    <div className="login-container">
      <form onSubmit={loginHandler} className="login-form">
        <div className="form-header">
          <h1 className="form-title">Login</h1>
        </div>
        <table className="form-table">
          <tbody>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </td>
            </tr>
            
            <tr>
              <td colSpan={2} className="form-actions">
                <button className="btn btn-primary">Login</button>
              </td>
            </tr>
            <tr>
                <td colSpan={2}>
                <div className="signup-link">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
                </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Login;
