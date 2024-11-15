import React from "react";

const UserList = ({ users }) => {
  console.log(users);
  return (
    <ul>
      {users &&
        users.map((user) => {
          return <li key={user.scanId}>{user.namn}</li>;
        })}
    </ul>
  );
};

export default UserList;
