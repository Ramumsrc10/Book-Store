import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Landpage = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5127/api/Book/GetAll")
      .then((response) => {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Error fetching data. Please try again later.");
      });
  }, []);

  return (
    <div className="book-list">
      {error && <p>{error}</p>}
      <div className="books">
        {books.map((book, index) => (
          <div key={index} className="book">
            <Link to={`/books/${book.title}`}>
              <img src={book.image} alt={book.title} className="book-image" />
            </Link>
            <div className="book-details">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">By {book.author}</p>
              <p className="book-genre">Genre: {book.genre}</p>
              <p className="book-price">Price: Rs{book.price}/-</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landpage;
