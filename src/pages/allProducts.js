import React from "react";
import Products from "@/components/Products";
import { getAllProducts } from "@/helpers/shopify";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function products({ products }) {
  return (
    <div>
      <Link href="/">Home</Link>
      <FontAwesomeIcon icon={regular("cart-shopping")} />
      {/* <Link></Link> */}
      <Products products={products.edges} />
    </div>
  );
}
export async function getStaticProps(context) {
  return getAllProducts()
    .then((response) => {
      return response.body.data?.products;
    })
    .then((products) => {
      return { props: { products } };
    })
    .catch((err) => console.log("not working", err));
}
