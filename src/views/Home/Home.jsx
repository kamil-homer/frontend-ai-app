import { Grid } from '@mui/material'
import { TopNavigation } from '../../components/TopNavigation/TopNavigation'
import { CurrentReading } from '../../components/CurrentReading/CurrentReading'

export const Home = () => {
  return (
    <Grid container direction="column">
      <TopNavigation />
      <CurrentReading />
    </Grid>
  )
}
