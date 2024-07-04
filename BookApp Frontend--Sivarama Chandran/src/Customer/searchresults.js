import React from "react";
import './Searchbook.css'

const SearchResults = ({ item }) => {
  return (
        <div className="book" key={item.id}>
          <img src={item.image} alt={item.title} className="book-image" />
          <div className="book-details">
            <h3 className="book-title">{item.title}</h3>
            <p className="book-author">By {item.author}</p>
            <p className="book-genre">Genre: {item.genre}</p>
            <p className="book-price">Price: Rs{item.price}/-</p>
          </div>
        </div>
  );
};

export default SearchResults;
