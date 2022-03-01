import { Container, Box, Typography } from "@material-ui/core"
import {
  OrcidButton,
  GoogleButton,
  LinkedInButton,
} from "@dictyBase/login-buttons"

const openOauthWindow = (provider: string) => {}

export default function LoginPage() {
  return (
    <Container maxWidth="xs">
      <Box mt={2} mb={3}>
        <Typography variant="h1" align="center">
          Log in
        </Typography>
      </Box>
      <Box textAlign="center">
        {/* {error && <ErrorNotification error={message} />} */}
        <Box mb={2} fontWeight={900}>
          <OrcidButton
            handleClick={() => openOauthWindow("orcid")}
            text="Sign in with ORCID"
          />
        </Box>
        <Box mb={2}>
          <GoogleButton
            handleClick={() => openOauthWindow("google")}
            text="Sign in with Google"
          />
        </Box>
        <Box mb={6}>
          <LinkedInButton
            handleClick={() => openOauthWindow("linkedin")}
            text="Sign in with LinkedIn"
          />
        </Box>
        {/* <OauthSignHandler /> */}
      </Box>
    </Container>
  )
}
