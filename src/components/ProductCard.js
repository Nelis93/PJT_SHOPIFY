import React from "react";

export default function ProductCard({ product, handleAddToCart }) {
  // console.log(product);
  return (
    <>
      <h1>{product.title}</h1>
      <img src={product.featuredImage.url} />
      <button onClick={handleAddToCart}>Add to card</button>
    </>
  );
}
