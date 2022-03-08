import { useRouter } from "next/router"
import { Provider, oauthLoginInput } from "@dictyBase/authentication"
import { useEffect } from "react"
import { Box, Typography } from "@material-ui/core"

export default function OauthCallbackPage() {
  const { query } = useRouter()

  useEffect(() => {
    // do not proceed until provider and code are defined
    if (!query.provider || !query.code) return

    const provider = query.provider as Provider
    const code = query.code as string

    const input = oauthLoginInput(provider, code)
    console.log(input)
  }, [query])

  return (
    <Box textAlign="center">
      <Typography variant="h1">Logging in...</Typography>
    </Box>
  )
}
