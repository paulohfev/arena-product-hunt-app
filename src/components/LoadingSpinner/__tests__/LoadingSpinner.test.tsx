import { render } from '@testing-library/react'

import LoadingSpinner from '../index'

describe('LoadingSpinner', () => {
  it('matches snapshot', () => {
    const { container } = render(<LoadingSpinner />)
    expect(container).toMatchSnapshot()
  })
})
