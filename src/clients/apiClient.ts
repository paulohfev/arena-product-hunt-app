import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const PRODUCT_HUNT_API_URL = process.env.NEXT_PUBLIC_API_URL
const token = process.env.NEXT_PUBLIC_API_TOKEN

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: PRODUCT_HUNT_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }),
  cache: new InMemoryCache(),
})
