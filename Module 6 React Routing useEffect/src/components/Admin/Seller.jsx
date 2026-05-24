import axios from "axios";
import React, { useEffect, useState } from "react";

const Seller = () => {
  const [users, setUsers] = useState([]);
  // const [name, setName] = useState("");
  // useEffect(() => {
  //   console.log("Component Mount.!!");
  //   //  demounting or cleanup function
  //   return () => {
  //     console.log("Component UnMount.!!");
  //   };
  // }, []);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h3>Admin Seller Page</h3>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Seller;
