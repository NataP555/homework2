import React, { useState } from "react";
import Card from "./Card";
import { users as allUsers } from "./usersData";

function Users() {
  const [users, setUsers] = useState(allUsers.slice(0, 4));
  const [showMore, setShowMore] = useState(true);
  function handleClick() {
    setUsers(allUsers);
    setShowMore(false);
  }

  return (
    <main className="container">
      {users.map((user) => (
        <Card key={user.id} {...user} />
      ))}
      {showMore &&
          <div style={{ width: '100%' }}>
            <button onClick={handleClick}>Show More</button>
          </div> 
      }
    </main>
  );
}

export default Users;
