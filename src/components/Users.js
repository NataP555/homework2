import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getData } from "../Api";
import FilterInputs from "./FilterInputs";
import CircularProgress from "@mui/material/CircularProgress";

const DEFAULT_NUMBER_OF_USERS = 5;

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filterName, setFilterName] = useState("");
  const [showMore, setShowMore] = useState(true);
  const [count, setCount] = useState(DEFAULT_NUMBER_OF_USERS);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function showOneMore() {
    setCount(count + 1);

    if (users.length === count + 1) {
      setShowMore(false);
    }
  }

  function getUsers() {
    setIsLoading(true);
    getData()
      .then((data) => {
        setUsers(data.results);
      })
      .catch(() => {
        setErrorMessage("Failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getUsers();
  }, []);

  function handleSearch(search, filterName) {
    setSearch(search);
    setFilterName(filterName);
  }

  let filteredUsers = users.slice(0, count);

  if (search) {
    filteredUsers = users.slice(0, count).filter((user) => {
      if (filterName === "email") {
        return user.email === search;
      }
      if (filterName === "name") {
        return user.name.first === search || user.name.last === search;
      }
    });
  }

  return (
    <main className="container">
      <FilterInputs onSearch={handleSearch} />
      {filteredUsers.map((user) => (
        <Card key={user.email} {...user} />
      ))}
      {showMore && (
        <div style={{ width: "100%" }}>
          <button onClick={showOneMore}>Show More</button>
        </div>
      )}
      {errorMessage && (
        <div style={{ color: "red" }}>
          <span> {errorMessage} </span>
        </div>
      )}

      {isLoading && (
        <div style={{ display: "flex" }}>
          <CircularProgress />
        </div>
      )}
    </main>
  );
}

export default Users;
