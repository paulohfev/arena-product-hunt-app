import { render } from '@testing-library/react'

import PostPageContent from '../index'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}))

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

describe('PostPageContent', () => {
  it('matches snapshot', () => {
    const { container } = render(<PostPageContent post={mockPost} />)
    expect(container).toMatchSnapshot()
  })
})
