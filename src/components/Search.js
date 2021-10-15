import React from "react";

function Search({search, setSearch}) {




  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  function handleSearch(search) {
    setSearch(search)
  }


  




  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
