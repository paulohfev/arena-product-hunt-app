import { MockedProvider } from '@apollo/client/testing'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { toast } from 'react-toastify'

import { GET_POSTS } from '@/graphql/queries'

import PostsTabList from '../index'

// Mock react-toastify
jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}))

const mockPosts = {
  nodes: [
    {
      id: '1',
      name: 'Test Post 1',
      tagline: 'Test Tagline 1',
      description: 'Test Description 1',
      votesCount: 100,
      url: 'https://example.com/1',
      slug: 'test-post-1',
      thumbnail: {
        url: 'https://example.com/image1.jpg',
      },
    },
    {
      id: '2',
      name: 'Test Post 2',
      tagline: 'Test Tagline 2',
      description: 'Test Description 2',
      votesCount: 50,
      url: 'https://example.com/2',
      slug: 'test-post-2',
      thumbnail: {
        url: 'https://example.com/image2.jpg',
      },
    },
  ],
  pageInfo: {
    hasNextPage: true,
    endCursor: 'cursor1',
  },
}

const popularPostsMock = {
  request: {
    query: GET_POSTS,
    variables: {
      order: 'VOTES',
      first: 10,
    },
  },
  result: {
    data: {
      posts: mockPosts,
    },
  },
}

const recentPostsMock = {
  request: {
    query: GET_POSTS,
    variables: {
      order: 'NEWEST',
      first: 10,
    },
  },
  result: {
    data: {
      posts: mockPosts,
    },
  },
}

const errorMock = {
  request: {
    query: GET_POSTS,
    variables: {
      order: 'VOTES',
      first: 10,
    },
  },
  result: {
    data: {
      posts: mockPosts,
    },
  },
  error: new Error('An error occurred'),
}

const renderComponent = (mocks = [popularPostsMock]) => {
  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <PostsTabList />
    </MockedProvider>
  )
}

describe('PostsTabList', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders loading state initially', () => {
    renderComponent()
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })

  it('renders posts after loading', async () => {
    renderComponent()

    await waitFor(() => {
      expect(screen.getByText('Test Post 1')).toBeInTheDocument()
      expect(screen.getByText('Test Post 2')).toBeInTheDocument()
    })
  })

  it('shows error toast when query fails', async () => {
    renderComponent([errorMock])

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Failed to load posts. Please try again later.')
    })
  })

  it('switches between Popular and Recent tabs', async () => {
    renderComponent([popularPostsMock, recentPostsMock])

    await waitFor(() => {
      expect(screen.getByText('Test Post 1')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('Recent'))
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Test Post 1')).toBeInTheDocument()
    })
  })

  it('matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
