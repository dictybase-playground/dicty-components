import { Typography, Box } from "@material-ui/core"

export const AuthError = () => (
  <Box>
    <Typography variant="h1">😢</Typography>
    <Typography variant="h5">
      <b>Could not login</b>
    </Typography>
    <Typography>
      Something went wrong. Please try logging in again, thank you
    </Typography>
  </Box>
)
