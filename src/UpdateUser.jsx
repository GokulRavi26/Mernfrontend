import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./UpdateUser.css"; // Import the CSS file

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  // Fetch existing user data when component mounts
  useEffect(() => {
    axios
      .get(`https://mernbackend-1-o3ij.onrender.com/api/user/fetch/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setAddress(res.data.address);
      })
      .catch((err) => {
        console.log("Failed to fetch user data:", err);
      });
  }, [id]);

  const updateUser = (e) => {
    e.preventDefault();
    axios
      .put(`https://mernbackend-1-o3ij.onrender.com/api/user/update/${id}`, {
        name,
        email,
        address,
      })
      .then((result) => {
        alert("User updated successfully");
        console.log(result.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("Failed to update user:", err);
      });
  };

  return (
    <div className="update-user-container">
      <h1>Update User</h1>
      <form onSubmit={updateUser}>
        <label>Enter your name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Enter your email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Enter your address:</label>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {/* Add Home Button */}
      <button onClick={() => navigate("/")}   style={{
          display: "block",
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#fcffdc",
          color: "#333",
          textDecoration: "none",
          borderRadius: "6px",
          textAlign: "center",
          border: "1px solid #ddd",
          fontWeight: "600",
        }}>
        Home
      </button>
    </div>
  );
};

export default UpdateUser;