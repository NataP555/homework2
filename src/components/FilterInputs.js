import React, { useState, useEffect } from "react";

import FormInput from "./FormInput";

const FilterInputs = (props) => {
  const { onSearch } = props;

  const [search, setSearch] = useState("");
  const [filterName, setFilterName] = useState("email");

  function handleSearch() {
    onSearch(search, filterName);
  }

  function toggleFilterName() {
    setFilterName(filterName === "email" ? "name" : "email");
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <button onClick={toggleFilterName}>{filterName}</button>
      <form>
        <FormInput
          name={filterName}
          placeholder={"enter " + filterName}
          onInput={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
      <button onClick={handleSearch}>Search </button>
    </div>
  );
};

export default FilterInputs;
