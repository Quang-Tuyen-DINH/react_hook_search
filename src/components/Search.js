import React, { useState } from 'react';

export const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (event) => {
    setSearchValue(event.target.value);
  }

  const resetInputField = () => {
    setSearchValue("");
  }

  const callSearFunction = (event) => {
    event.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
    <div>
      <form className="search">
        <input value={searchValue} onChange={handleSearchInputChanges} type="text" />
        <input onClick={callSearFunction} type="submit" value="SEARCH" />
      </form>
    </div>
  );
};
