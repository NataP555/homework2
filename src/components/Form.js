import { toBeRequired } from "@testing-library/jest-dom/matchers";
import React, { useState } from "react";

import Users from './Users';
import FormInput from "./FormInput";

const email = 'digitalAcademy@gmail.com';
const pass = 'iLoveReact123';



const Form = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const disabled = user.email !== email || user.password !== pass;

  const submitHandler = (e) => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      <Users />
    );
  }

  const settings = [
    {
      label: 'email',
      placeholder: 'email',
      name: 'email'
    },
    {
      label: 'password',
      placeholder: 'password',
      name: 'password'
    }
  ];

  return (
    <form onSubmit={submitHandler}>
      {settings.map(field => (
        <FormInput
          key={field.name}
          name={field.name}
          label={field.label}
          placeholder={field.placeholder}
          onInput={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
      ))}
      <button type="submit" disabled={disabled}>Submit </button>
      <div></div>
    </form>
  );
};

export default Form;
