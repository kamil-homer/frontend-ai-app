import { render, screen } from '@testing-library/react'
import { TopNavigation } from './TopNavigation'
import { describe, it } from 'vitest'

describe('App', () => {
  it('renders the App component', () => {
    render(<TopNavigation />)

    screen.debug() // prints out the jsx in the App component unto the command line
  })
})
