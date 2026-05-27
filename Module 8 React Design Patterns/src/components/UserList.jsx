import React from "react";
const UserList = ({ users, loading, error }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong...</div>;
  if (!users) return null;
  return (
    <div className="userList">
      {users.length &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <p>
                <strong>{user.name}</strong>
              </p>
              <p>
                <strong>{user.email}</strong>
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default UserList;
