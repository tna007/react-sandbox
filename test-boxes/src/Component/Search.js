import React from "react";

function Search(props) {
  return (
    <div id="search">
      <input type="text" onChange={props.search} placeholder="Search animals" />
    </div>
  );
}

export default Search;
