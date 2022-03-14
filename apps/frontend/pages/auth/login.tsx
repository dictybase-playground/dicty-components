import { Container, Box, Typography } from "@material-ui/core"
import { openOauth, useAuthStore } from "@dictyBase/authentication"
import { useRouter } from "next/router"
import {
  OrcidButton,
  GoogleButton,
  LinkedInButton,
} from "@dictyBase/login-buttons"
import { useEffect } from "react"

export default function LoginPage() {
  const router = useRouter()
  const { state } = useAuthStore()

  useEffect(() => {
    if (state.isAuthenticated) router.push(window.location.origin)
  }, [state, router])

  const oauthWindowCallback = (oauthUrl: string) => {
    router.push(oauthUrl)
  }

  return (
    <Container maxWidth="xs">
      <Box mt={2} mb={3}>
        <Typography variant="h1" align="center">
          Log in
        </Typography>
      </Box>
      <Box textAlign="center">
        <Box mb={2} fontWeight={900}>
          <OrcidButton
            handleClick={() => openOauth("orcid", oauthWindowCallback)}
            text="Sign in with ORCID"
          />
        </Box>
        <Box mb={2}>
          <GoogleButton
            handleClick={() => openOauth("google", oauthWindowCallback)}
            text="Sign in with Google"
          />
        </Box>
        <Box mb={6}>
          <LinkedInButton
            handleClick={() => openOauth("linkedin", oauthWindowCallback)}
            text="Sign in with LinkedIn"
          />
        </Box>
      </Box>
    </Container>
  )
}
