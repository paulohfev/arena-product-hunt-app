import { render } from '@testing-library/react'

import Button from '../index'

describe('Button', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Button backgroundColor='white' color='black' border='1px solid #e0e0e0' disabled>
        Click me
      </Button>
    )
    expect(container).toMatchSnapshot()
  })
})
