import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default function FilterableProductTable(props) {
  const { products } = props;

  //Hooking products to the check box state
  //Define state
  //inStockOnly is the variable and setInStockOnly is the function
  //which is used to set the state of the variable
  const [inStockOnly, setInStockOnly] = useState(false);
  const handleInStockChange = (value) => {
    setInStockOnly(value);
  };

  //hook the search bar text area to a state
  //defin state
  const [filterText, setFilterText] = useState('')
 const handleTextFilterChange = (value) =>{
  setFilterText(value);
 }
  //make searchBar aware of the inStockOnly state and also change of state
  return (
    <div style={{border: '2px solid red', padding:'10px', width:'300px'}}>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={handleTextFilterChange}
        inStockOnly={inStockOnly}
        onInStockChange={handleInStockChange}
      />
      <ProductTable 
      products={products} 
      inStockOnly={inStockOnly}
      filterText={filterText}
      />
    </div>
  );
}
