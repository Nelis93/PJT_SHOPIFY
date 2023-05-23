import React, { useReducer } from "react";
import ProductCard from "./ProductCard";

const initialState = {
  cart: [],
};

const reducerFunction = (state, action) => {
  switch ((action, type)) {
    case "addToCart":
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};
export default function Products({ products }) {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  function handleAddToCart(item) {
    console.log("success");
    dispatch({ type: "addToCart", payload: item });
  }
  return products.map((product) => {
    return <ProductCard key={product.node.id} product={product.node} />;
  });
}
