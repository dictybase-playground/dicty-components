import { Container, Box, Typography } from "@material-ui/core"
import { OauthCallbackData, openOauthWindow } from "@dictyBase/authentication"
import { useEffect, useState } from "react"
import {
  OrcidButton,
  GoogleButton,
  LinkedInButton,
} from "@dictyBase/login-buttons"

export default function LoginPage() {
  const [openOauth, setOpenOauth] = useState(false)

  const oauthWindowCallback = () => {
    setOpenOauth(true)
  }

  useEffect(() => {
    if (!openOauth) return

    // set event listener to pop-up window message
    const onMessage = (event: MessageEvent) => {
      event.preventDefault()
      event.stopPropagation()
      if (!event.data.provider) return

      const { query } = event.data as OauthCallbackData
      console.log(query.substring(1).split("&"))
    }
    window.addEventListener("message", onMessage, false)
    return () => window.removeEventListener("message", onMessage)
  }, [openOauth])

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
            handleClick={() => openOauthWindow("orcid", oauthWindowCallback)}
            text="Sign in with ORCID"
          />
        </Box>
        <Box mb={2}>
          <GoogleButton
            handleClick={() => openOauthWindow("google", oauthWindowCallback)}
            text="Sign in with Google"
          />
        </Box>
        <Box mb={6}>
          <LinkedInButton
            handleClick={() => openOauthWindow("linkedin", oauthWindowCallback)}
            text="Sign in with LinkedIn"
          />
        </Box>
        {/* <OauthSignHandler /> */}
      </Box>
    </Container>
  )
}
