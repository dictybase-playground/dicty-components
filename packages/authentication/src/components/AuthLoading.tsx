import { Box, CircularProgress, Typography } from "@material-ui/core"

export const AuthLoading = () => (
  <Box>
    <CircularProgress />
    <Typography>Logging in</Typography>
  </Box>
)
