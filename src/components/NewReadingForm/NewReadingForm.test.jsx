import { render, screen, fireEvent } from '@testing-library/react'
import { NewReadingForm } from './NewReadingForm'

describe('NewReadingForm', () => {
  it('renders the title input', () => {
    render(<NewReadingForm />)
    const titleInput = screen.getByLabelText(/title/i)
    expect(titleInput).toBeInTheDocument()
  })

  it('updates the title input value', () => {
    render(<NewReadingForm />)
    const titleInput = screen.getByLabelText(/title/i)
    fireEvent.change(titleInput, { target: { value: 'Test Title' } })
    expect(titleInput.value).toBe('Test Title')
  })

  it('renders the author input', () => {
    render(<NewReadingForm />)
    const authorInput = screen.getByLabelText(/author/i)
    expect(authorInput).toBeInTheDocument()
  })

  it('updates the author input value', () => {
    render(<NewReadingForm />)
    const authorInput = screen.getByLabelText(/author/i)
    fireEvent.change(authorInput, { target: { value: 'Test Author' } })
    expect(authorInput.value).toBe('Test Author')
  })

  it('renders the current page input', () => {
    render(<NewReadingForm />)
    const currentPageInput = screen.getByLabelText(/current page/i)
    expect(currentPageInput).toBeInTheDocument()
  })

  it('updates the current page input value', () => {
    render(<NewReadingForm />)
    const currentPageInput = screen.getByLabelText(/current page/i)
    fireEvent.change(currentPageInput, { target: { value: '100' } })
    expect(currentPageInput.value).toBe('100')
  })

  it('does not update the current page input value with non-numeric characters', () => {
    render(<NewReadingForm />)
    const currentPageInput = screen.getByLabelText(/current page/i)
    fireEvent.change(currentPageInput, { target: { value: 'abc' } })
    expect(currentPageInput.value).toBe('0')
  })
})
