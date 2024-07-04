import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./signup.css"; // Import custom CSS file for styling

const Signup = () => {
  const [userid, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");
  const Navigate = useNavigate();

  const registerHandler = (e) => {
    e.preventDefault();
    const item = { userid, name, email, password, mobile, role };
    console.log(item);

    axios
      .post("http://localhost:5127/api/User/RegisterUser", item)
      .then((res) => {
        console.log(res.data);
        Navigate("/login")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup-container">
      <form onSubmit={registerHandler} className="signup-form">
        <div className="form-header">
          <h1 className="form-title">Signup</h1>
        </div>
        <table className="form-table">
          <tbody>
            <tr>
              <td>User ID</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={userid}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </td>
            </tr>
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
              <td>Mobile</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Role</td>
              <td>
                <select
                  name="role"
                  className="form-control"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="form-actions">
                <button className="btn btn-primary">Register</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Signup;
