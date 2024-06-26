import { Grid, IconButton, Typography } from '@mui/material'
import {
  NotificationsNoneOutlined,
  ManageAccountsOutlined,
} from '@mui/icons-material'

export const TopNavigation = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ marginBottom: '32px' }}
    >
      <Typography>Joe</Typography>
      <>
        <IconButton aria-label="delete" color="primary">
          <NotificationsNoneOutlined />
          <ManageAccountsOutlined />
        </IconButton>
      </>
    </Grid>
  )
}
