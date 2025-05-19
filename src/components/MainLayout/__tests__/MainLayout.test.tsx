import { render } from '@testing-library/react'

import MainLayout from '../index'

describe('MainLayout', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <MainLayout>
        <div>Test Content</div>
      </MainLayout>
    )
    expect(container).toMatchSnapshot()
  })
})
