import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../common/Loader";

const Seller = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [name, setName] = useState("");
  // useEffect(() => {
  //   console.log("Component Mount.!!");
  //   //  demounting or cleanup function
  //   return () => {
  //     console.log("Component UnMount.!!");
  //   };
  // }, []);
  useEffect(() => {
    fetchUsers();
    // setLoading(true);
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => setUsers(res.data))
    //   .catch((error) => {
    //     setErrors(error.message);
    //   });
    // setLoading(false);
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  }, []);
  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
      setLoading(false);
    } catch (error) {
      setErrors(error.message);
      setLoading(false);
    }
  };

  const addUser = () => {
    const newUser = {
      name,
      id: users.length + 1,
    };
    setUsers([newUser, ...users]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => {
        // after saving data to server.
        setUsers([res.data, ...users]);
      })
      .catch((error) => {
        setErrors(error.message);
        setUsers(users);
      });
  };
  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/${id}")
      .catch((errors) => {
        setErrors(errors.message);
        setUsers(users);
      });
  };
  const UpdateUser = (user) => {
    const updateUser = {
      ...user,
      name: user.name + " Updated",
    };
    setUsers(users.map((u) => (u.id === user.id ? updateUser : u)));
    axios
      .patch(
        "https://jsonplaceholder.typicode.com/users/${user.id}",
        UpdateUser,
      )
      .catch((errors) => {
        setErrors(errors.message);
        setUsers(users);
      });
  };
  return (
    <div>
      <h3>Admin Seller Page</h3>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={addUser}>Add User</button>
      {isLoading && <Loader />}
      {errors && <em>{errors}</em>}
      <table>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <p key={user.id}>{user.name}</p>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    UpdateUser(user);
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Seller;
