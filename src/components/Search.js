import React from "react";

function Search({setSearch}) {

  let searchValue;

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearch(searchValue);
  }

  function handleChange(e){
    searchValue = e.target.value;
    console.log(e.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
