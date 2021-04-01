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
  }
}

}`;

export { PRODUCTS_QUERY, PRODUCT_BY_ID, PRODUCTS_CATEGORIES }