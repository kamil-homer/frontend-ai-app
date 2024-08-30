import { Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
export const NewReadingForm = () => {
  // TODO: add form with title, author and currentPage
  const [newReading, setNewReading] = useState({
    title: '',
    author: '',
    currentPage: 0,
  })
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
      <Grid container justifyContent="space-between">
        <TextField
          label="Title"
          value={newReading.title}
          onChange={(e) =>
            setNewReading({ ...newReading, title: e.target.value })
          }
          variant="standard"
        />
        <TextField
          label="Author"
          value={newReading.author}
          onChange={(e) =>
            setNewReading({ ...newReading, author: e.target.value })
          }
          variant="standard"
        />
        <TextField
          label="Current Page"
          value={newReading.currentPage}
          onChange={(e) => {
            const value = e.target.value
            if (/^\d+$/.test(value) || value === '') {
              setNewReading({ ...newReading, currentPage: Number(value) })
            }
          }}
          variant="standard"
        />
      </Grid>
    </>
  )
}
