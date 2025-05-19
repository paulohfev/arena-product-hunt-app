import { MockedProvider } from '@apollo/client/testing'
import { render } from '@testing-library/react'

import { GET_POSTS } from '@/graphql/queries'

import PostsTabList from '../index'

const mocks = [
  {
    request: {
      query: GET_POSTS,
      variables: {
        order: 'VOTES',
        first: 10,
      },
    },
    result: {
      data: {
        posts: {
          nodes: [
            {
              id: '1',
              name: 'Test Post',
              tagline: 'Test Tagline',
              description: 'Test Description',
              votesCount: 100,
              url: 'https://example.com',
              thumbnail: {
                url: 'https://example.com/image.jpg',
              },
            },
          ],
          pageInfo: {
            hasNextPage: false,
            endCursor: null,
          },
        },
      },
    },
  },
]

describe('PostsTabList', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PostsTabList />
      </MockedProvider>
    )
    expect(container).toMatchSnapshot()
  })
})
