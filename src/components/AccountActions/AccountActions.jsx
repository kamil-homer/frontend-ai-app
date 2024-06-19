import {
  AccountBalanceOutlined,
  CalendarMonthOutlined,
  VerifiedOutlined,
} from '@mui/icons-material'
import { Button, Grid } from '@mui/material'

export const AccountActions = () => {
  return (
    <Grid container justifyContent="space-evenly">
      <Grid item>
        <Button variant="outlined" startIcon={<AccountBalanceOutlined />}>
          Transfer
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" startIcon={<CalendarMonthOutlined />}>
          History
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" startIcon={<VerifiedOutlined />}>
          Offert
        </Button>
      </Grid>
    </Grid>
  )
}
