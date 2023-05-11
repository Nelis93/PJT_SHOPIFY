import React from "react";
import ProductCard from "./ProductCard";

export default function Products({ products }) {
  return products.map((product) => {
    return <ProductCard key={product.node.id} product={product.node} />;
  });
}
