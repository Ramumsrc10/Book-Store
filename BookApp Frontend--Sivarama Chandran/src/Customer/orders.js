import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './orders.css'; 

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    // Fetch all orders
    axios.get('http://localhost:5127/api/Order/GetAllOrders')
      .then((res) => {
        console.log(res.data)
        setOrders(res.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
        setError('Error fetching orders. Please try again later.');
      });
  }, []);

  useEffect(() => {
    // Filter orders for the current user
    const currUserId = JSON.parse(localStorage.getItem('user')).userId;
    const userOrders = orders.filter(order => order.userId === currUserId);
    setUserOrders(userOrders);
  }, [orders]);

  return (
    <div className="order-list-container">
      <h1 className="order-list-title">Order List</h1>
      {error && <p className="error-message">{error}</p>}
      <ul className="order-list">
        {userOrders.map(order => (
          <li key={order.orderId} className="order-item">
            <p className="order-info">Order ID: {order.orderId}</p>
            <p className="order-info">Order Date: {order.orderDate}</p>
            <p className="order-info">User ID: {order.userId}</p>
            <p className="order-info">Book ID: {order.bookId}</p>
            <p className="order-info">Quantity: {order.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
