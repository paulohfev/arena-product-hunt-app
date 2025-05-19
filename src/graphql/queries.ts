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
        slug
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

export const GET_POST_BY_ID = gql`
  query GetPostById($id: ID!) {
    post(id: $id) {
      id
      name
      tagline
      url
      votesCount
      createdAt
      description
      reviewsCount
      thumbnail {
        url
      }
      user {
        name
        username
      }
      topics {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  }
`
