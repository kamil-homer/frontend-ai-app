import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { NewReadingForm } from './NewReadingForm'
import { describe, expect, it } from 'vitest'

describe('NewReadingForm', () => {
  it('should generate test for form in NewReadingForm', async () => {
    render(<NewReadingForm />)

    const titleInput = screen.getByLabelText('Title')
    fireEvent.change(titleInput, { target: { value: 'My Favorite Book' } })

    const authorInput = screen.getByLabelText('Author')
    fireEvent.change(authorInput, { target: { value: 'John Doe' } })

    screen.logTestingPlaygroundURL()
    const submitButton = screen.getByRole('button', {
      name: /add new reading/i,
    })
    await waitFor(() => fireEvent.click(submitButton))

    expect(screen.getByDisplayValue('My Favorite Book')).toBeInTheDocument()
  })
})
