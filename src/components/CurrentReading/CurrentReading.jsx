import { Add } from '@mui/icons-material'
import { Button, Grid, IconButton, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export const CurrentReading = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('https://freetestapi.com/api/v1/books')
      const books = await response.json()
      setBooks(books)
    }

    fetchBooks()
  }, [])

  return (
    <Grid container justifyContent="space-between">
      <Typography variant="h6" color="primary">
        Currently Reading
      </Typography>
      <IconButton variant="contained" color="primary">
        <Add />
      </IconButton>
    </Grid>
  )
}
