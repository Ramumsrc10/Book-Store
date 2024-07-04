import { useState } from "react";
import axios from "axios";
import "./Searchbook.css";
import SearchResults from "./searchresults";

const SearchBook = () => {
  const [item, setItem] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const searchHandler = () => {
    axios
      .get("http://localhost:5127/api/Book/GetByName/" + name)
      .then((res) => {
        console.log(res.data);
        setItem(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Error fetching data. Please try again later.");
      });
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="search-input"
        />
        <button onClick={searchHandler} className="search-button">
          Search
        </button>
      </div>
      <SearchResults item={item} />
    </>
  );
};
export default SearchBook;
