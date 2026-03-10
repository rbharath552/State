
import UserList from "./UserList";

function UserContainer() {

  const users = [
    { id: 1, name: "Raj", age: 25 },
    { id: 2, name: "Bharath", age: 30 },
    { id: 3, name: "Rahul", age: 22 }
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
}

export default UserContainer;