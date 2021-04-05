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

const PRODUCT_BY_ID = gql` query Product( $id: Int !) {
  simpleProduct( productId: $id) {
    id
    name
    productId
    price
    averageRating
    slug
    description
    image {
      uri
      title
      srcSet
      sourceUrl
    }

  }
}`;

const PRODUCT_BY_CATEGORY = gql` query Product( $id: Int!) {
  products(where: {categoryId: $id}) {
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


const CHECKOUT_MUTATION = gql`
mutation Checkout( $productId: Int!, $qty: Int!, $cId: String!) {
  addToCart(input: {productId: $productId, quantity: $qty, clientMutationId: $cId }) {
    cart{
      total
    }
  }
}
`;
const PRODUCTS_CATEGORIES = gql` query{
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
productCategories(first: 10) {
  nodes {
    image {
      sourceUrl
      srcSet
    }
    name
    slug
    productCategoryId

  }
}

}`;

export { PRODUCTS_QUERY, PRODUCT_BY_ID, PRODUCTS_CATEGORIES, PRODUCT_BY_CATEGORY, CHECKOUT_MUTATION }