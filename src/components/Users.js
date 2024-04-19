import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getData } from "../Api";
import FilterInputs from "./FilterInputs";

const DEFAULT_NUMBER_OF_USERS = 5; 


function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState({ name: '', email: '' });
  const [showMore, setShowMore] = useState(true);
  const [count, setCount] = useState(DEFAULT_NUMBER_OF_USERS);

  function showOneMore () {
    setCount(count + 1);

    if (users.length === count + 1) {
      setShowMore(false);
    }
  }

  async function getUsers () {
    const { results } = await getData();

    setUsers(results);
  }

  useEffect(() => {
    getUsers();
  }, []);
  
  function handleSearch (search) {
    setSearch(search);
  }

  let filteredUsers = users.slice(0, count);

  if (search.name || search.email) {
    filteredUsers = users.slice(0, count).filter((user) => {
      return (
        user.name.first === search.name ||
        user.name.last === search.name ||
        user.email === search.email
      );
    });
  }

  return (
    <main className="container">
      <FilterInputs onSearch={handleSearch}/>
      {filteredUsers.map((user) => (
        <Card key={user.email} {...user} />
      ))}
      {showMore &&
        <div style={{ width: '100%' }}>
          <button onClick={showOneMore}>Show More</button>
        </div> 
      }
    </main>
  );
}

export default Users;
