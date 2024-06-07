import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api.zplub.pl/graphql',
  cache: new InMemoryCache(),
})

export default client
