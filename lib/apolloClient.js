import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://api.zplub.pl/graphql',
  cache: new InMemoryCache(),
})

export default client
