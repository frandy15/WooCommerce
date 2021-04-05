import fetch from 'node-fetch'
import { apiConfig } from '../../config'
import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
} from '@apollo/client'


const apolloClient = new ApolloClient({
    link: createHttpLink({
        uri: apiConfig.graphqlUrl,
        fetch,

    }),
    cache: new InMemoryCache()
})
console.log(`Using uri ${apiConfig.graphqlUrl}`)

export default apolloClient;