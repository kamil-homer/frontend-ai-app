import { Button, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'

export const NewReadingForm = () => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    currentPage: '',
  })

  const handleChange = (e, fieldName) => {
    setNewBook((currentState) => ({
      ...currentState,
      [fieldName]: e.target.value,
    }))
  }

  const handleSubmit = () => {
    console.log('New reading: ', newBook)
  }

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        sx={{ marginBottom: '16px' }}
      >
        <Typography variant="h6" color="primary">
          Add New Reading
        </Typography>
      </Grid>
      <Grid container direction="column" justifyContent="space-between" gap={1}>
        <TextField
          id="new-book-title"
          label="Title"
          variant="outlined"
          value={newBook.title}
          onChange={(e) => handleChange(e, 'title')}
        />
        <TextField
          id="new-book-author"
          label="Author"
          variant="outlined"
          value={newBook.author}
          onChange={(e) => handleChange(e, 'author')}
        />
        <TextField
          id="new-book-current-page"
          label="Current page"
          variant="outlined"
          value={newBook.currentPage}
          onChange={(e) => {
            if (!isNaN(e.target.value)) {
              handleChange(e, 'currentPage')
            }
          }}
        />
        <Button onClick={handleSubmit}>Add New Reading</Button>
      </Grid>
    </>
  )
}
