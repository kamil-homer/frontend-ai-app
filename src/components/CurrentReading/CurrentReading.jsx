import { Add } from '@mui/icons-material'
import { Grid, IconButton, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export const CurrentReading = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('https://freetestapi.com/api/v1/books')
      const books = await response.json()
      console.log(books)
      setBooks(books)
    }

    fetchBooks()
  }, [])

  return (
    <>
      <Grid container justifyContent="space-between">
        <Typography variant="h6" color="primary">
          Currently Reading
        </Typography>
        <IconButton variant="contained" color="primary">
          <Add />
        </IconButton>
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item xs={5}>
          <img src={books[0]?.cover_image} alt="book" />
        </Grid>
        <Grid item xs={7}>
          {books[0]?.title}
        </Grid>
      </Grid>
    </>
  )
}
