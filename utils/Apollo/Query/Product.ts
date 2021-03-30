import gql from 'graphql-tag'

const PRODUCTS_QUERY = gql`query{
    products(first: 20) {
        nodes {
          id
          name
          productId
          averageRating
          slug
          description
          image {
            uri
            title
            srcSet
            sourceUrl
          }
            ... on SimpleProduct {
                regularPrice,
              salePrice
              
            }
        }
        
    }
  }`;

export { PRODUCTS_QUERY }