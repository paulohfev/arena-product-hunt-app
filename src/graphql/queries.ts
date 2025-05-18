import { gql } from '@apollo/client'

export const GET_POSTS = gql`
  query GetPosts($order: PostsOrder!, $first: Int!, $after: String) {
    posts(order: $order, first: $first, after: $after) {
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
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`
