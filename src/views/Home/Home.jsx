import { Divider, Grid } from '@mui/material'
import { TopNavigation } from '../../components/TopNavigation/TopNavigation'
import { CurrentReading } from '../../components/CurrentReading/CurrentReading'
import { NewReadingForm } from '../../components/NewReadingForm/NewReadingForm'

export const Home = () => {
  return (
    <Grid container direction="column">
      <TopNavigation />
      <CurrentReading />
      <Divider />
      <NewReadingForm />
    </Grid>
  )
}
