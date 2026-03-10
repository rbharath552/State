import React from "react";
import ProductCard from "./ProductCard";

function ProductContainer() {

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 }
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ProductCard products={products} />
    </div>
  );
}
export default ProductContainer;