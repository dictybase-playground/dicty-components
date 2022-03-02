import { useRouter } from "next/router"
import { Provider, OauthCallbackData } from "@dictyBase/authentication"
import { useEffect } from "react"
import { Box, Typography } from "@material-ui/core"

export default function OauthCallbackPage() {
  const { query, asPath } = useRouter()
  const provider = query.provider as Provider

  useEffect(() => {
    // asPath returns the the entire url minus the origin
    // ex. http://example.com/foo/bar?name=brad -> /foo/bar?name=brad
    const queryStart = asPath.indexOf("?")
    const message: OauthCallbackData = {
      query: asPath.substring(queryStart),
      provider: provider,
      url: `${window.location.origin}${asPath.substring(0, queryStart)}`,
    }
    window.opener?.postMessage(message, window.location.toString())
    window.close()
  }, [asPath, provider])

  return (
    <Box textAlign="center">
      <Typography variant="h1">
        Transferring to login system ........
      </Typography>
    </Box>
  )
}
