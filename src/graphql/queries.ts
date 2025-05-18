import { gql } from '@apollo/client'

export const GET_POPULAR_POSTS = gql`
  query {
    posts(order: VOTES, first: 10) {
      nodes {
        id
        name
        tagline
        votesCount
        url
        thumbnail {
          url
        }
      }
    }
  }
`
