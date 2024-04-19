import React, { useState, useEffect } from "react";

import FormInput from "./FormInput";

const config = [
  {
    label: "email",
    placeholder: "email",
    name: "email",
  },
  {
    label: "name",
    placeholder: "name",
    name: "name",
  },
];

const FilterInputs = (props) => {
  const { onSearch } = props;

  const [searchData, setSearchData] = useState({ email: "", name: "" });

  function handleSearch() {
    onSearch(searchData);
  }

  return (
    <div style={{
        display: 'flex',
        width: '100%',
    }}>
      <form>
        {config.map((field) => (
          <FormInput
            key={field.name}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            onInput={(e) => {
              setSearchData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
          />
        ))}
      </form>
      <button onClick={handleSearch}>Search </button>
    </div>
  );
};

export default FilterInputs;
