import React from "react";

export default function ProductCard({ product }) {
  console.log(product);
  return <div>{product.title}</div>;
}
