import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./User.css";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://mernbackend-1-o3ij.onrender.com/api/user/fetch")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data.data); // Assuming the API returns data in res.data.data
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`https://mernbackend-1-o3ij.onrender.com/api/user/delete/${id}`)
        .then(() => {
          alert("User deleted successfully");
          setUsers(users.filter((user) => user._id !== id)); // Update the UI after deletion
        })
        .catch((error) => {
          console.log(error);
          alert("Failed to delete user");
        });
    }
  };

  return (
    <div>

<div>
        <h1 className="userslist-heading">Welcome..!</h1>
      </div>
      <img
        src="https://i.pinimg.com/originals/51/bd/c9/51bdc900f42f3fc2d25ff6eaba2e15a1.gif"
        className="user-image"
        alt="Centered"
      />
      <br></br>
      <br></br>

      <div className="create-button-container">
        <Link to={`/create`} className="create-button">
          Create
        </Link>
      </div>

      <div>
        <h1 className="userslist-heading">Userslist</h1>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>
                <Link
                  to={`/update/${user._id}`}
                  className="action-button update-button"
                >
                  Update
                </Link>
               <br></br>
                <button
                  onClick={() => deleteUser(user._id)}
                  className="action-button delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
