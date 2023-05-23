async function shopifyFetch({ query, variables }) {
  const endpoint = `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2023-04/graphql.json`;

  const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  try {
    const result = await fetch(endpoint, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        "X-Shopify-Storefront-Access-Token": key,
      },

      body: { query, variables } && JSON.stringify({ query, variables }),
    });

    return {
      status: result.status,

      body: await result.json(),
    };
  } catch (error) {
    console.error("Error:", error);

    return {
      status: 500,

      error: "Error receiving data",
    };
  }
}

export async function getAllProducts() {
  return shopifyFetch({
    query: `{
                products(first: 100) {
                  edges {
                    node {
                      handle
                      priceRange {
                        maxVariantPrice {              
                          amount              
                        }              
                        minVariantPrice {              
                          amount              
                        }              
                      }
                      title
                      description
                      featuredImage {
                        url                                             
                      }
                      variants(first: 5) {
                        edges {
                          node{
                            id
                            price {
                              amount
                            }
                            quantityAvailable
                            title
                          }
                        }
                      }
                    }
                  }
                }
              }`,
  });
}

export async function getProduct(handle) {
  return shopifyFetch({
    query: `{
        product(handle: "${handle}") {
          title
          description
      
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 5) {
            edges {
              node{
                price {
                  amount
                }
                quantityAvailable
                title
              }
            }
          }
        }
      }`,
  });
}
