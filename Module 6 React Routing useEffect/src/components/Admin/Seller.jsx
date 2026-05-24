import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../common/Loader";

const Seller = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // const [name, setName] = useState("");
  // useEffect(() => {
  //   console.log("Component Mount.!!");
  //   //  demounting or cleanup function
  //   return () => {
  //     console.log("Component UnMount.!!");
  //   };
  // }, []);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
    setLoading(false);
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
      {isLoading && (
        <h3>
          <Loader />
        </h3>
      )}
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Seller;
