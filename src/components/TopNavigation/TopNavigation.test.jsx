import { render } from '@testing-library/react'
import { TopNavigation } from './TopNavigation'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('renders the App component', () => {
    const screen = render(<TopNavigation />)
    expect(screen.getByText('Joe')).toBeInTheDocument()
  })
})
