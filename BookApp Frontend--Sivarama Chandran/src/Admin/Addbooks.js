import { useState } from "react";
import axios from "axios";

const Addbook = () => {
    const [id, setId] = useState(0);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");

    const addbookHandler = (e) => {
        e.preventDefault(); // Prevent form submission
        let item = { id: id, title: title, author: author, genre: genre, price: price, image: image };
        console.log(item);
        axios
            .post("http://localhost:5127/api/Book/AddBook", item)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <form onSubmit={addbookHandler}>
                <table>
                    <tr>
                        <td>ID</td>
                        <td>
                            <input type="number" value={id} onChange={(e) => setId(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Author</td>
                        <td>
                            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Genre</td>
                        <td>
                            <select
                                name="genre"
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                                required
                            >
                                <option value="">Select Genre</option>
                                <option value="Fiction">Fiction</option>
                                <option value="Non-fiction">Non-fiction</option>
                                <option value="Science Fiction">Science Fiction</option>
                                <option value="Fantasy">Fantasy</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>
                            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                            <input type="text" value={image} onChange={(e) => setImage(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type="submit">Add Book</button>
                        </td>
                    </tr>
                </table>
            </form>
        </>
    );
}

export default Addbook;
