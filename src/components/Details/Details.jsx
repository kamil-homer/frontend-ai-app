import { Grid, Typography } from '@mui/material'

export const Details = () => {
  return (
    <Grid
      container
      direction="column"
      alignContent="start"
      alignItems="start"
      sx={{ margin: '2rem 0' }}
    >
      <Typography variant="h3">$1200</Typography>
      <Typography variant="subtitle">$200 spent this month</Typography>
    </Grid>
  )
}
