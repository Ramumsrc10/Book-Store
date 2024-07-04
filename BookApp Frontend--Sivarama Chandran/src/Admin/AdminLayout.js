import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './AdminLayout.css'; // Import your CSS file for styling
import { useAuth } from '../Customer/AuthContext';

const AdminLayout = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const logoutHandler=()=>{
    setIsLoggedIn(false);
    navigate("/login")
  }
  return (
    <div className="admin-layout">
      <header>
        <h1>Admin Dashboard</h1>
        <nav>
          <ul>
            <li><Link to="/admin/userorders">Orders</Link></li>
            <li><Link to="/admin/addbook">Add Book</Link></li>
          </ul>
        </nav>
        <button onClick={logoutHandler}>logout</button>
      </header>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
};

export default AdminLayout;
