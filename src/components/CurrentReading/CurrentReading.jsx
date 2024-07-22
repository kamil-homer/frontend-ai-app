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
    <>
      <Grid
        container
        justifyContent="space-between"
        sx={{ marginBottom: '16px' }}
      >
        <Typography variant="h6" color="primary">
          Currently Reading
        </Typography>
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item xs={6}>
          <img
            src={books[0]?.cover_image}
            alt="book"
            style={{ width: '100% ' }}
          />
        </Grid>
        <Grid
          container
          item
          xs={6}
          alignContent="space-between"
          sx={{ paddingLeft: '24px' }}
        >
          <Grid
            container
            item
            xs={12}
            direction="column"
            alignItems="flex-start"
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {books[0]?.title}
            </Typography>
            <Typography variant="subtitle2">{books[0]?.author}</Typography>
          </Grid>
          <Typography paragraph sx={{ textAlign: 'left' }}>
            {books[0]?.description}
          </Typography>
          <Button variant="contained" sx={{ marginBottom: '6px' }}>
            Continue reading
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
