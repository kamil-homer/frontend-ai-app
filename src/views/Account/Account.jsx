import { Grid } from '@mui/material'
import { Details } from '../../components/Details/Details'
import { TopNavigation } from '../../components/TopNavigation/TopNavigation'
import { AccountActions } from '../../components/AccountActions/AccountActions'

export const Account = () => {
  return (
    <Grid container direction="column">
      <TopNavigation />
      <Details />
      <AccountActions />
    </Grid>
  )
}
