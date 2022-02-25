import { Box, Container, Typography } from "@material-ui/core"
import {
  GoogleButton,
  LinkedInButton,
  OrcidButton,
} from "@dictyBase/login-buttons"

const handleClick = (value: string) => {
  alert(`You clicked ${value}`)
  console.log(event)
}

export default function LoginButtonsPage() {
  return (
    <Container maxWidth="xs">
      <Box textAlign="center" mt={2}>
        <Typography variant="h4" gutterBottom>
          Log in
        </Typography>
      </Box>
      <OrcidButton
        text="Sign in with ORCID"
        handleClick={() => handleClick("orcid")}
      />
      <p />
      <GoogleButton
        text="Sign in with Google"
        handleClick={() => handleClick("google")}
      />
      <p />
      <LinkedInButton
        text="Sign in with LinkedIn"
        handleClick={() => handleClick("linkedin")}
      />
    </Container>
  )
}
