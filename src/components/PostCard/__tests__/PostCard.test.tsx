import { render } from '@testing-library/react'

import PostCard from '../index'

const mockPost = {
  id: '1',
  name: 'Test Post',
  tagline: 'Test Tagline',
  description: 'Test Description',
  votesCount: 100,
  url: 'https://example.com',
  thumbnail: {
    url: 'https://example.com/image.jpg',
  },
}

describe('PostCard', () => {
  it('matches snapshot', () => {
    const { container } = render(<PostCard post={mockPost} />)
    expect(container).toMatchSnapshot()
  })
})
