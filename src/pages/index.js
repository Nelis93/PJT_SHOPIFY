import Head from "next/head";
import { getAllProducts } from "@/helpers/shopify";
import Link from "next/link";
import Products from "@/components/Products";

export default function Home({ products }) {
  console.log("these are the products", products.edges);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/allProducts">Go to products</Link>
        <div className="popProds">display most popular products</div>
      </main>
    </>
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
