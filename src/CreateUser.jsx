// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Createuser = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const navigate = useNavigate();

//   const submit = (e) => {
//     e.preventDefault();
//     axios
//       .post("https://backend-mern-s7bz.onrender.com/api/user/create", { name, email, address })
//       .then((result) => {
//         console.log(result.data);
//         navigate("/");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <h1>Create user</h1>
//       <form onSubmit={submit}>
//         <label>Enter your name:</label>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <label>Enter your email:</label>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label>Enter your address:</label>
//         <input
//           type="text"
//           placeholder="Enter your address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Createuser;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./CreateUser.css"; // Import the CSS file

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("https://mernbackend-1-o3ij.onrender.com/api/user/create", {
        name,
        email,
        address,
      })
      .then((result) => {
        console.log(result.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="create-user-container">
      <h1>Create User</h1>
      <img
        src="https://i.pinimg.com/originals/9c/83/88/9c838839fcf2197a8d8007b27ba713a3.gif"
        className="user-image"
        alt="Centered"
      />
      <form onSubmit={submit}>
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

      {/* Home Button */}
      <Link
        to="/"
        style={{
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
        }}
      >
        Home
      </Link>
    </div>
  );
};

export default CreateUser;