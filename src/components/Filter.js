import React from "react";

function Filter(props) {
  console.log(props);
  function handleClick(event) {
    props.onCategoryChange(event);
  }
  return (
    <select name="filter" onChange={handleClick}>
      <option value="All">Filter by category</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Dessert">Dessert</option>
    </select>
  );
}

export default Filter;
