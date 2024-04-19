import React, { useState } from "react";

import Form from "./components/Form";
import Users from './components/Users';

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const submitHandler = (e) => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      <Users />
    );
  }

  return (
    <div className="App">
      <h1>App</h1>
      <Form onSubmit={submitHandler}/>
    </div>
  );
}

export default App;
