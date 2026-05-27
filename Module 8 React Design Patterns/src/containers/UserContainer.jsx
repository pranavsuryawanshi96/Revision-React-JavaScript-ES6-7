import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";

const UserContainer = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErrors] = useState(false);

  const getUsers = async () => {
    // fetch users still loading
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const json = await response.json();
      if (!json) return;
      setUsers(json);
      setIsLoading(false);
    } catch (error) {
      setErrors(error);
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <UserList users={users} loading={isLoading} error={error} />
    </div>
  );
};

export default UserContainer;
