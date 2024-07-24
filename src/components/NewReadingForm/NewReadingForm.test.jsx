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

    const submitButton = screen.getByRole('button', {
      name: /add new reading/i,
    })
    await waitFor(() => fireEvent.click(submitButton))

    const currentPageInput = screen.getByLabelText('Current page')
    fireEvent.change(currentPageInput, { target: { value: 'page 15' } })
    expect(screen.queryByDisplayValue('page 15')).not.toBeInTheDocument()

    fireEvent.change(currentPageInput, { target: { value: '15' } })
    expect(screen.queryByDisplayValue('15')).toBeInTheDocument()

    expect(screen.getByDisplayValue('My Favorite Book')).toBeInTheDocument()
  })
})
