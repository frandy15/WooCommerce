import fetch from 'node-fetch'
import { ApolloClient } from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { apiConfig } from '../../config'


const apolloClient = new ApolloClient({
    link: createHttpLink({
        uri: apiConfig.graphqlUrl,
        fetch,

    }),
    cache: new InMemoryCache()
})

export default apolloClient;