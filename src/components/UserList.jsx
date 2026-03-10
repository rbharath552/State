import React from "react";

function UserList({ users }) {
  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <hr />
        </div>
      ))}
      
    </div>
  );
}
export default UserList;