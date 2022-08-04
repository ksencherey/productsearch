import React from "react";

export default function SearchBar(props) {
  const { inStockOnly, filterText } = props;

  //add a change event for when the box is checked
  const handleInStockChange = (e) => {
    props.onInStockChange(e.target.checked);
  };

  //add even to the search bar text area
  const handleTextFilterChange = (e) => {
    props.onFilterTextChange(e.target.value);
  };

  return (
    <form style={{ border: "2px solid green", padding: "10px", width: "auto" }}>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleTextFilterChange}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleInStockChange}
        />
        {""}
        Only show products in stock
      </p>
    </form>
  );
}
