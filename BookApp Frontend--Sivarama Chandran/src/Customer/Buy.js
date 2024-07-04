import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Buy.css'; // Import custom CSS file for styling
import Conformation from './Conformation';
import { useAuth } from './AuthContext';

const Buy = () => {
    const [item, setItem] = useState(null);
    const { title } = useParams();
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    useEffect(() => {
        axios.get(`http://localhost:5127/api/Book/GetByName/${title}`)
            .then((res) => {
                console.log(res.data);
                setItem(res.data);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setError("Error fetching data. Please try again later.");
            });
    }, [title]);

    const buyHandler = () => {
        if (isLoggedIn) {
            const orderData = {
                userId: JSON.parse(localStorage.getItem('user')).userId,// Assuming you have access to the logged-in user's ID
                bookId: item.id, // Assuming item.id contains the book ID
                quantity: 1 // Assuming the quantity is fixed as 1
            };
    
            axios.post("http://localhost:5127/api/Order/AddOrder", orderData)
                .then(response => {
                    // Handle success response
                    console.log("Order placed successfully:", response.data);
                    // Redirect or navigate to a confirmation page
                    navigate("/confirmation");
                })
                .catch(error => {
                    // Handle error
                    console.error("Error placing order:", error);
                    alert("Failed to place order. Please try again.");
                });
        } else {
            alert("Please Login to purchase!!!");
        }
    };
    

    return (
        <div className="buy-container">
            {error && <p>{error}</p>}
            {item && (
                <>
                    <div className="buy-image">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="buy-info">
                        <h3>{item.title}</h3>
                        <p>By {item.author}</p>
                        <p>Genre: {item.genre}</p>
                    </div>
                    <div className="buy-about">
                        <h4>About</h4>
                        <p>{item.about}</p>
                    </div>
                    <div className="buy-details">
                        <p>Price: Rs{item.price}/-</p>
                        <button className="buy-now-button" onClick={buyHandler}>Buy Now</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Buy;
