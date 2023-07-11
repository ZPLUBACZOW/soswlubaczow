import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clj8x1zbf1nrv01ul0n8g5bfr/master',
  cache: new InMemoryCache(),
})

export default client
