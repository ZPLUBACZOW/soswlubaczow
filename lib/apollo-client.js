import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clj8wzw681n4b01t655fi7v6u/master',
  cache: new InMemoryCache(),
})

export default client
